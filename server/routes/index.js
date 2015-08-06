var express = require('express');
var router = express.Router();

var path = require('path');

router.get('/data/nouns', function(req, res){
    res.json(nouns);
});

router.get('/data/metaAdj', function(req, res){
     res.json(metaAdj);
});

router.get('/data/adjectives', function(req, res){
    res.json(adjectives);
});

router.get ('/*', function(req, res){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;