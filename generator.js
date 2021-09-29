var EC = require('elliptic').ec;
var ec = new EC('secp256k1');

function createAddress(){
       
    var key = ec.genKeyPair();

    let privk = key.getPrivate("hex");
    let publick = key.getPublic("hex");

    return {
        "privateKey" : privk,
        "publicKey" : publick
    }
}

module.exports = createAddress;