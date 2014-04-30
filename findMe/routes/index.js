var wechat = require('wechat');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};