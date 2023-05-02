const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const data = require('./data/chefdata.json');
app.use(cors());
app.get('/', (req,res) =>{
    res.send('Chefs zone is running')
});
app.get('/data', (req,res) =>{
    res.send(data);
})
app.listen(port, () =>{
    console.log(`Chefs API is running on port: ${port}`)
});