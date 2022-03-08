const http = require('http');
const express = require('express');
const morgan = require('morgan');
const logger = morgan('tiny');
const helmet = require("helmet");
const HOST = '127.0.0.1';
const PORT = 3002;

const app = express();
const server = http.createServer(app);


app.use(helmet());
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`Request at ${new Date()}`);
    next();
});

// app.use("*", (req, res, next) => {
//     console.log(`${req.method} ${req.path}`);
//     next();
// });

app.get('/', (req, res) => {
    res.send('Hi');
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});