const router = require("express").Router()
const {genDomainNames} = require("../app/http/requests/domainGenerator")

router.get("", (req, res)=>{
    res.status(200).json({Message: "Welcome to domain name generator"})
})

router.post("", genDomainNames, (req, res)=>{
    const {validDomains} = req.body
    res.status(201).json({
        reference: `${req.body.referenceName}`,
        output: {
            generatedNames: req.body.generatedNames,
            validDomains: req.body.validDomains
        }
    })
})

module.exports = router