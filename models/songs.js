const { Schema, model } = require('mongoose')

const SongsSchema = Schema({
    title: {
        type: String,
        required: [true, 'Title is mandatory'],
        unique: true
    },
    author: {
        type: String,
        required: [true, 'Author is mandatory']
    },
    year: {
        type: Number,
        required: [true, 'Year is mandatory']
    },
    duration: {
        type: Number,
        required: [true, 'Duration is mandatory']
    },
    portada: {
        type: String
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'Genre',
        required: true
    }
})

module.exports = model('Songs', SongsSchema);