'use strict';

const path        = require('path');
const serveStatic = require('feathers').static;
const favicon     = require('serve-favicon');
const compress    = require('compression');
const cors        = require('cors');
const morgan      = require('morgan')

const feathers      = require('feathers');
const configuration = require('feathers-configuration');
const hooks         = require('feathers-hooks');
const rest          = require('feathers-rest');
const bodyParser    = require('body-parser');
const socketio      = require('feathers-socketio');
const middleware    = require('./middleware');
const services      = require('./services');

const restFormatter = require('./middleware/service-formatter');




const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(compress())
    .options('*', cors())
    .use(morgan('dev'))
    .use(cors())
    .use(favicon(path.join(app.get('public'), 'favicon.ico')))
    .use('/', serveStatic(app.get('public')))
    .use('/static/admin', serveStatic(path.join(__dirname, '../../frontend-admin/src')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended : true}))
    .configure(hooks())
    .configure(rest(restFormatter))
    .configure(socketio())
    .configure(services)
    .configure(middleware)

;



module.exports = app;
