require("dotenv").config()

const {Configuration, OpenAIApi} = require("openai")
const {generateRequest} = require("../utils/domainAI_request")
const {domainVerify} = require("../utils/urlVerification")


const configuration = new Configuration({
    apiKey: process.env["OPENAI_API_KEY"]
})
const openai = new OpenAIApi(configuration)

const genDomainNames = async(req, res, next)=>{
    if(!configuration.apiKey){
        return res.status(500).json({
            error: "Missing API key"
        })
    }

    const {referenceName} = req.body
    if(referenceName.trim().length === 0){
        return res.status(400).json({
            error: "Please enter a valid reference domain name"
        })
    }

    try{
        const completion = await openai.createCompletion({
            model:"text-davinci-003",
            prompt: generateRequest(referenceName),
            temperature: 0.6,
            max_tokens: 20
        })
        var generatedNames = completion.data.choices[0].text
        generatedNames = generatedNames.split("\n")
        req.body.generatedNames = generatedNames
        const validDomains = domainVerify(generatedNames)
        req.body.validDomains = validDomains
        next()
    }catch(err){
        return res.status(500).json({error: err.message})
    }
}

module.exports = {genDomainNames}