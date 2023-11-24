const searchRouter = require('express').Router()
const searchController = require('../../controllers/search.controller')

searchRouter.get('/search',searchController.displaySearchScreen)

//este metodo usara el util fetch y la ruta de busqueda de mongo

searchRouter.get('/search/:title', searchController.searchMovieBytitle)

searchRouter.post("/search/", searchController.userPost);

searchRouter.get("/search/details/:id", searchController.displayFilDetails)

module.exports = searchRouter