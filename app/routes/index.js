'use strict';
var multer = require('multer');
var     autoReap = require('multer-autoreap');

module.exports = function (app) {
    app.route('/')
        .get(function (req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });
    app.use(autoReap);
    app.post('/', multer({dest:process.cwd()+'/temp/'})
        .single('file'), function(req, res){
    res.send(JSON.stringify({"fileSize": req.file.size}))
    });
};