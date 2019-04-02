var express = require('express');
var app = express();

app.use('/static', express.static('dist'))
app.use('/static', express.static('dist/static'))

app.listen(3000);