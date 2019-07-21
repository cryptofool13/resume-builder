const express = require("express")

const cv = require('./resume')

const app = express()

app.set("view engine", "pug")

app.set("views", process.cwd() + "/src/views")


app.get("/", function(req, res) {
  res.render("index", cv)
})

app.listen(3000, function() {
  console.log("listening on port 3000")
})
