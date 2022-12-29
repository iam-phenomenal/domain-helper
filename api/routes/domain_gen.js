const router = require("express").Router()
const dns = require("dns")

router.get("", (req, res)=>{
    res.status(200).json({Message: "Welcome to domain name generator"})
})

router.post("", (req, res)=>{
    const url = req.body.url
    const urlPatternResult = verifyURL(url)
    if(urlPatternResult){
        dns.lookup(url, (err, value)=>{
            if(err){
                res.status(400).json({
                    Error: "Invalid hostname"
                })
            }else{

            }
        })
    }else{
        res.status(400).json("Invalid url")
    }
})

module.exports = router