const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1/tree', require('./api/v1/tree/tree.router'))

app.listen(8800, () => {
    console.log('Server is up at port 8800')
});