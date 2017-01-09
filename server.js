'use strict';
const express = require('express'),
    port = process.env.PORT || 8080,
    routes = require('./app/routes/index.js'),
    autoReap = require('multer-autoreap')
var app = express();

routes(app);
app.use(autoReap);
app.listen(port, function () {
    console.log('Listening on port '+ port);
});