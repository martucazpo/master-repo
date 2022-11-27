const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")
const routes = require("./backend/routes")
//comment out if no login
const auth = require("./backend/auth")

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//comment out if using client
app.use(express.static(__dirname + "/backend/public"))

//comment out if not using pug
app.set("views", "./backend/views")
app.set('view engine', 'pug')

//comment out if no login
auth(app)

app.use(routes)


app.listen(8000, ()=>console.log("Tiny ears listen on port 8000...."))

module.exports = app
