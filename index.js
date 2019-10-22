const express = require('express')
const app = express()
const port = 15790

app.get('/', (req, res) =>
  res.send('Greetings from jampttws...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
