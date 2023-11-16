//index , 404 ... y los uses de los demas routers
const mainRouter = require('express').Router()

const dashboardRoutes = require('./dashboard.routes')
const filmRoutes = require('./film.routes')
const loginRoutes = require('./login.routes')

mainRouter.use(dashboardRoutes)
mainRouter.use(filmRoutes)
mainRouter.use(loginRoutes)

// Middlewares
const error404 = require('../middlewares/error404');
const morgan = require('../middlewares/morgan');

// Logger
mainRouter.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//home
mainRouter.get('/', (req, res) => {
    res.send('Bienvenido al buscador de Películas')
  })

//index
mainRouter.get('/index', (req, res) => {
    res.redirect('/')
  })

// Para rutas no existentes
mainRouter.use('*',error404);

module.exports = ejercicio1Router