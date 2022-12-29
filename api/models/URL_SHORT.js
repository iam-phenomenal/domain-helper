const mongoose = require("mongoose")

const UrlSchema = new mongoose.Schema({
    url: {type: String, required: true}
}, {timestamps: true})

module.exports = mongoose.model("URLS", UrlSchema)