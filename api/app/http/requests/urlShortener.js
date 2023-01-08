const URLs = require("../../../models/URL_SHORT")
const generateShort = require("../utils/shortGenerator")

const getURL = async(req, res)=>{
    const shortID = req.params.shortid
    try{
        const originalUrl = await URLs.findOne({short: shortID})
        if(originalUrl){
            return res.status(300).redirect(originalUrl.url)
        }else{
            return res.status(400).json({Error: "Invalid Shortened URL"})
        }
    }catch(err){
        return res.status(500).json({Error: err.message})
    }
}

const createShortURL = async (req, res)=>{
    const {url, ip} = req.body

    try{
        const shortURL = generateShort()
        const newUrl = new URLs({
            url: url,
            ip: ip,
            short: shortURL
        })
        const savedUrl = await newUrl.save()
        return res.status(201).json({
            message: "New short url created",
            Info: savedUrl._doc
        })
    }catch(err){
        return res.status(500).json({Error: err.message})
    }
}

module.exports = {createShortURL, getURL}