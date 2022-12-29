const { urlencoded } = require("express")
const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const morgan = require("morgan")

const db = require("./database")

const indexRouter = require("../api/routes/index")
const urlShortRouter = require("../api/routes/url_short")
const domainGenRouter = require("../api/routes/domain_gen")

const app = express()

db.on("error", (error)=>console.error(error))
db.once("open", ()=> console.log("Database connected!"))

app.use(helmet())
app.use(cors())
app.use(morgan("common"))

app.use(express.json())
app.use(urlencoded({extended: true}))

app.use("", indexRouter)
app.use("/urlshort", urlShortRouter)
app.use("/domainGen", domainGenRouter)

module.exports = app