var qrcode = require('qrcode-terminal');

console.log('First commit');


qrcode.generate('https://www.ucjc.edu/' , function (qrcode){
    console.log(qrcode);
});

console.log('First problem solved');