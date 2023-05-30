const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const app = express();

const songs = require('./routes/songs');

//DATABASE CONNECTION (not used yet)
async function connectAtlas(){
 await dbConnection()
}
connectAtlas()

//MIDDLEWARE

app.use(express.json())

//----------

//ROUTES
app.get('/', (req, res) => res.send('Songs API running'))
app.use('/songs', songs)

app.listen(process.env.PORT)

module.exports = app;