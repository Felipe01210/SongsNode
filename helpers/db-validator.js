const Songs = require('../models/songs')

const existsTitle = async (title) => {

    const titleDB = await Songs.findOne({title});
    if(titleDB){
        throw new Error(`Song ${title} already exist`);
    }

}

module.exports = { existsTitle }