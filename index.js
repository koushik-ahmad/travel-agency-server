const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const Port = process.env.PORT || 5000;

const place = require('./data/place.json');

app.get('/', (req, res) => {
    res.send('Agency server is running')
});

app.get('/allPlace', (req, res) => {
    res.send(place);
})

app.listen(Port, () => {
    console.log(`Running on port, ${Port}`);
});