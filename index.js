const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bienvenido al buscador de Películas')
  })

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

module.exports = app