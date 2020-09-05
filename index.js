const express = require('express')
const app = express()
const port = 8000
app.all("*", function (req, res) {
var fullUrl = "https" + '://' + req.get('host') + req.originalUrl;
var url = new URL(fullUrl);
var path = url.pathname
res.send("hi")
})

app.listen(port)
