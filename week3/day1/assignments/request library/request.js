const express = require('express');
const request = require('request');

const app = express();

request('https://jsonplaceholder.typicode.com/todos/1', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.id);
    console.log(body.title);
    })

// app.listen(3000);