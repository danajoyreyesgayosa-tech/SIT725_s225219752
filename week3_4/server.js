var express = require("express");
const path = require("path");

var app = express();
var port = process.env.PORT || 3004;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("App listening to: " + port);
});