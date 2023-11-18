const searchRouter = require('express').Router()
const searchController = require('../../controllers/search.controller')

searchRouter.get('/search',searchController.searchMovieBytitle)

//este metodo usara el util fetch y la ruta de busqueda de mongo
searchRouter.get('/search/:title',searchController.searchMovieBytitle)

module.exports = searchRouter