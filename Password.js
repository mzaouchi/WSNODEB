var generator = require('generate-password');

var password = generator.generate({
	length: 4,
	numbers: false,
    uppercase : true,
    lowercase : false

});

// 'uEyMTw32v9'
console.log(password);