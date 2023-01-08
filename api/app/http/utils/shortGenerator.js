const URLs = require("../../../models/URL_SHORT")

async function generateUnique(){
    var randomStr = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for(var i=0; i<=10; i++){
        randomStr += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    const verifyShort = await URLs.findOne({short: randomStr})
    if(verifyShort){
        return generateUnique()
    }
    return randomStr
}
 
module.exports = {generateUnique}