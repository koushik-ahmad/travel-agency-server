const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const Port = process.env.PORT || 5000;

const place = require('./data/place.json');

app.get('/', (req, res) => {
    res.send('Agency server is running')
});

app.get('/place', (req, res) => {
    res.send(place);
});

app.get('/place/:id', (req, res) => {
    const id = req.params.id;
    const singlePlace = place.find(p => p.id === id);
    if (!singlePlace) {
        res.send('Not found place');
    }
    res.send(singlePlace);
})

app.listen(Port, () => {
    console.log(`Running on port, ${Port}`);
});