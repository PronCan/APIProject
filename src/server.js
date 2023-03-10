const express = require('express');
const app = express();
const cors = require('cors');
const test = require('./test')

app.use(cors());

app.use('/api', test);

app.get('/', (req, res) => {
    res.send('www');
})

const port = 5000;
app.listen(port, () => {
    console.log(`${port}`);
})