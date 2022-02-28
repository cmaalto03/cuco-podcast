const { application } = require('express');
var express = require('express');
var router = express.Router();
var app = express();

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


module.exports = router;
