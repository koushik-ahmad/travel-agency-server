const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const Port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('Agency server is running')
});

app.listen(post, () => {
    console.log(`Running on port, ${Port}`);
});