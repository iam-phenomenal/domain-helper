const dns = require("dns")

const urlRegexCheck = (url)=>{
    try{
        const newUrl = new URL(url)
        return newUrl.protocol === "http" || 
            newUrl.protocol === "https"
    }catch(err){
        return false
    }
}


const urlVerification = (req, res, next)=>{
    const {url} = req.body
    const regexVerify = urlRegexCheck(url)
    if(!regexVerify)  return res.status(422).json({Error: "Invalid URL pattern"})
    dns.lookup(url, (err, value)=>{
        console.log(err?.message)
        if(err) return res.status(422).json({Error: "Invalid Hostname"})
        req.body.ip = value
        next()
    })
}

const domainVerify = (generatedNames)=>{
    var validDomains = []
    for (var i in generatedNames){
        dns.lookup(i, (err, value)=>{
            if(!err) validDomains.push(i)
        })
    }
    return validDomains
}

module.exports = {urlVerification, domainVerify}