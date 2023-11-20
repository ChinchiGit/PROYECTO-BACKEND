//for testing scafolding , later move to corresponding  sql controller
require('./config/db_pgsql');
require('./config/db_mongo');

const express = require('express')
const app = express()
const port = 3000

// Configuración motor plantilla PUG
app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mainRouter = require('./routes/main.routes')

app.use(mainRouter)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

module.exports = app