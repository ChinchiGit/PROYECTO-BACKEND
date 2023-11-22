const dashboardRouter = require('express').Router()
const dashboardController = require('../../controllers/dashboard.controller')

dashboardRouter.get('/dashboardUser',dashboardController.displayDashboardUser)
dashboardRouter.post('/dashboardUser',dashboardController.displayDashboardUser)

dashboardRouter.get('/dashboardAdmin',dashboardController.displayDashboardAdmin)

module.exports = dashboardRouter