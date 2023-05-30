const { response, request } = require('express')
const Songs = require('../models/songs')


//GET songs con filtrado opcional
async function getSongs(req, res){
    const {title, author} = req.query
    const query = {title, author}
    for(const key in query){
        if(query[key] === undefined){
            delete query[key]
        }
    }
    const songs = await Songs.find(query)
    res.json(songs)
}

//GET song
async function getSong(req, res){
    const id = req.params.id;
    if(id.length == 24){
        const songs = await Songs.find({_id: id});
        if((await songs).length){
            res.json(songs)
        }else{
            res.json({message: 'Song not found'})
        }
    }else{
        res.json({message: 'Id length incorrect'})
    }
}

//POST song
async function postSong(req, res){
    const {title, author, year, duration} = req.body;
    const song = new Songs({title, author, year, duration});

    await song.save();

    res.json({song});
}

//PUT song
async function putSong(req, res){
    const {title, author, year, duration} = req.body;
    const songId = req.params.id;
    if(id.length == 24){
        
        const song = await Songs.findByIdAndUpdate(songId, {title, author, year, duration})
        res.json(song)
    }else{
        res.json({message: 'Id length incorrect'})
    }

}

//DELETE song
async function deleteSong(req, res){
    const songId = req.params.id;
    if(songId.length == 24){
        const song = await Songs.findByIdAndDelete(songId);
        res.json(song)
    }else{
        res.json({message: 'Id length incorrect'})
    }

}

module.exports = { getSongs, getSong, postSong, putSong, deleteSong }
