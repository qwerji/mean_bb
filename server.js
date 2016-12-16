const express = require('express'),
    app = express(),
    path = require('path'),
    bp = require('body-parser'),
    session = require('express-session'),
    port = 8000;

app.use(express.static(path.join(__dirname + '/client')));

app.use(express.static(path.join(__dirname + '/bower_components')));

app.use(bp.json());

app.use(session({
    secret: 'benblackbelt',
    resave: false,
    saveUninitialized: true
}))

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`)
})
