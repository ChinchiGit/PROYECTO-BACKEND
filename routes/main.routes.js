//index , 404 ... y los uses de los demas routers
const mainRouter = require('express').Router()

const webRoutes = require('./web.routes/web.routes')
const apiRoutes = require('./api.routes/api.routes')

mainRouter.use(webRoutes)
mainRouter.use('/api',apiRoutes)

// Middlewares
const error404 = require('../middlewares/error404');
const morgan = require('../middlewares/morgan');

// Logger
mainRouter.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//home
mainRouter.get('/', (req, res) => {
    res.status(200).render('./home')
  })

//index
mainRouter.get('/index', (req, res) => {
    res.redirect('/')
  })

// Para rutas no existentes
mainRouter.use('*',error404);

module.exports = mainRouter