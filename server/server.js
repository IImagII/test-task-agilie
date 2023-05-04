import jsonServer from 'json-server'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'response.json')

server.post('/', (req, res) => {
   console.log(req.body)
   fs.writeFile(filePath, JSON.stringify(req.body), err => {
      if (err) {
         console.error(err)
         res.status(500).send('Server Error')
      } else {
         res.status(200).send('Success')
      }
   })
})

server.use(router)

server.listen(3004, () => {
   console.log(`JSON Server is running`)
})
