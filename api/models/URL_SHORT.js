const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    url: {type: String, required: true},
    ip: {type:String, required: true},
    short: {type: String, required: true, unique: true}
}, {timestamps: true})

module.exports = mongoose.model("URLS", UrlSchema)