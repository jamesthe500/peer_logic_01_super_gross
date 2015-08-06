var express = require('express');
var path = require('path');
var app = express();
var adjectives = require("./public/data/adjectives");
var nouns = require("./public/data/nouns");
var metaAdj = require("./public/data/metaAdj");
var index = require('./routes/index');

app.set('port', (process.env.PORT || 5000));


app.get('/data/nouns', function(req, res){
    res.json(nouns);
});

app.get('/data/metaAdj', function(req, res){
    res.json(metaAdj);
});

app.get('/data/adjectives', function(req, res){
    res.json(adjectives);
});

app.use('/', index);

app.listen(app.get('port'), function() {
    console.log('server listening on port: ' + app.get('port'));
});
