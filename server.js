'use strict';
const express = require('express'),
    port = process.env.PORT || 8080,
    routes = require('./app/routes/index.js')

var app = express();

routes(app);

app.listen(port, function () {
    console.log('Listening on port '+ port);
});