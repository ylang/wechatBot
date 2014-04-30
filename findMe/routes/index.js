var wechat = require('wechat');

exports.index = function(req, res){
	if (req.query.echostr) {
		res.send(req.query.echostr);
	} else {
		res.send("hello world");
	}
};