
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(__dirname + '/dist/portafolio-app'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(( __dirname + '/dist/portafolio-app/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 4200);