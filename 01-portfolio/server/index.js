const express = require('express')
const next = require('next')

const authService = require('./services/auth')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const secretData = [
  {
    title: "eiei"
  }
]

app.prepare()
  .then(() => {
    const server = express()

    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
      return res.json(secretData)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.use((err, req, res, next) => {
      if (err.name === 'UnauthorizedError') {
        res.status(401).send({
          title: 'Unauthorized',
          detail: 'Unauthorized Access!'
        })
      }
    })

    server.listen(3000, (err) => {
      if (err) {
        throw err
      }

      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })