exports.getWorld = function(req,res){
    res.json({result: 'Hello Wrold from Controller'});
}

exports.getWorldParams = function(req,res){
    res.json({message: 'Hello BScBest!', data: [
        req.params.foo,
        req.params.bar
    ]});
};

exports.postWorld = function(req,res){
    res.json({result: 'Post was sent', data: req.body});
};
const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

module.exports = router;
