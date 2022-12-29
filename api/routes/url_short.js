const router = require("express").Router()

const {createShortURL, getURL} = require("../app/http/requests/urlShortener")

router.post("", createShortURL)

router.get("/:shortid", getURL)

module.exports = router