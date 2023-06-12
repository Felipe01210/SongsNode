const { Schema, model } = require('mongoose')

const GenreSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory']
    },
    description: {
        type: String,
        required: [true, 'Description is mandatory']
    }
})

module.exports = model('Genre', GenreSchema)