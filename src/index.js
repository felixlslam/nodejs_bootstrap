const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express();

app.use(helmet());
app.use(morgan('combined'));
app.get('/', (req, res) => {
    res.send(200, 'Hello World');
});

app.listen(8080);
