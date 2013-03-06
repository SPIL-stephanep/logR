var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    server = require('http')
        .createServer(app)
        .listen(9999);

/**
 * EXPRESS SETUP
 */
app.engine('html', cons.mustache);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());

/**
 * Routes
 */

app.get('/', function(req, res) {
    res.send('logR');
});
