var express = require("express")
var app = express()
var port = process.env.PORT || 3001;

// Serve public folder
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log("App listening to: " + port)
});