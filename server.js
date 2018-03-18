var express = require("express");
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(favicon(path.join(__dirname, 'app/public', 'favicon.ico')));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
