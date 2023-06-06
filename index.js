const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const app = express();

const songs = require('./routes/songs');
const auth = require('./routes/auth');
const user = require('./routes/users')

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
app.use('/auth', auth)
app.use('/user', user)

app.listen(process.env.PORT)

module.exports = app;