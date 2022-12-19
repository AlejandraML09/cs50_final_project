const express = require('express')
const mongoose = require('mongoose')
const app = express();
var cors = require('cors')
require('dotenv/config');


app.use(cors())
mongoose.connect(process.env.DB_URL)
const characterSchema = new mongoose.Schema({});

const getCharacters = async () => {    
    const character = mongoose.model('characters', characterSchema, 'characters')
    const data = await character.find();
    console.warn(data);
    return data
}


app.get('/characters', async (req, res) => {
    let characters = await getCharacters()
    res.send(JSON.stringify(characters))
})

app.listen(5000);