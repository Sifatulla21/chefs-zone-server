const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chefdata.json');
const hot = require('./data/hotitems.json');
const quote = require('./data/quote.json');
app.use(cors());
app.get('/', (req,res) =>{
    res.send('Chefs zone is running')
});
app.get('/chef', (req,res) =>{
    res.send(chef);
})
app.get('/hot', (req,res) =>{
    res.send(hot);
})
app.get('/quote', (req,res) =>{
    res.send(quote);
})
app.get('/chef/:id', (req,res)=>{
    const id = parseInt(req.params.id);
    const selectedChef = chef.find(c=>parseInt(c.c_id) === id);
    res.send(selectedChef);
})
app.listen(port, () =>{
    console.log(`Chefs API is running on port: ${port}`)
});