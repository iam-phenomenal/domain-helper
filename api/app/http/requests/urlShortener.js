const URLs = require("../../../models/URL_SHORT")
const {urlRegexCheck, urlValidation} = require("../controllers/urlVerification")
const dns = require("node:dns")

const getURL = async(req, res)=>{
    const shortID = req.params.shortid
    try{
        const originalUrl = await URLs.findById(shortID).select("url")
        if(originalUrl){
            return res.status(300).redirect(originalUrl)
        }else{
            return res.status(400).json({Error: "Invalid Shortened URL"})
        }
    }catch(err){
        return res.status(500).json({Error: err.message})
    }
}

const createShortURL = async (req, res)=>{
    const url = req.body.url
    try{
        if(!urlRegexCheck(url)){
            return res.status(400).json({Error: "Invalid URL"})
        }
        const options = {
            family: 6,
            hints: dns.ADDRCONFIG |dns.V4MAPPED
        }
    }catch(err){
        return res.status(500).json({Error: err.message})
    }
}

module.exports = {createShortURL, getURL}