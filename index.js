const crypto = require("crypto");

module.exports.genHash = (secret="ashdi134s9i",val="ilovec@ts")=> {
	const random = Math.floor(Math.random()*9999);
	const hash = crypto.createHmac('sha256',secret)
	.update(val+random)
	.digest('hex');

	return hash;
}