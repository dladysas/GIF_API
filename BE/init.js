import express from 'express';
import giphy from './modules/giphy.js';
import watson from './modules/watson.js';

const app = express();

async function queryGif(kekw){
    const gif = await giphy.search(kekw);
    const dt = gif[0].images.original.url
    return dt;
}

async function queryWatson(){
    
}

app.get('/:query', async (req, res) => {
    let kekw = req.params.query
        res.set("Content-Type", "text/html")
        res.send(`<img src='${await queryGif(kekw)}'>`);
});

app.listen(3001, () => {
  console.log('Port');
});
