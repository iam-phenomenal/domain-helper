const dns = require("dns")


const urlRegexCheck = (url)=>{
    let pattern = /(^(http[s]?):\/\/)?(www.)?\w+(.\w+)$/
    return pattern.test(url)
}


module.exports = {urlRegexCheck}