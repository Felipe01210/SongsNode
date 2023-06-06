const Songs = require('../models/songs')

const existsTitle = async (title) => {

    const titleDB = await Songs.findOne({title});
    console.log(titleDB)
    if(titleDB){
        console.log("error")
        throw new Error(`Song ${title} already exist`);
    }

}

const existNotSong = async (id) => {
    const idDB = await Songs.findById(id);
    if(!idDB){
        throw new Error('No song with this id')
    }
}

module.exports = { existsTitle, existNotSong }