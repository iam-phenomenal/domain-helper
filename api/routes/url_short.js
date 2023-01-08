const router = require("express").Router()

const {urlVerification} = require("../app/http/utils/urlVerification")

const {createShortURL, getURL} = require("../app/http/requests/urlShortener")

router.post("", urlVerification, createShortURL)

router.get("/:shortid", getURL)

module.exports = router