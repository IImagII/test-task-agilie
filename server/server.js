import jsonServer from 'json-server'
import path from 'path'
import { fileURLToPath } from 'url'
import { updateResponseData } from './services/updateResponseData.js'

const server = jsonServer.create()
const router = jsonServer.router('server/db.json')
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)

const RESPONSE = 'response'
const TASK = 'task'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'response.json')

server.post(`/${RESPONSE}/${TASK}1`, (req, res) => {
   updateResponseData(`${RESPONSE}_${TASK}1`, filePath, req.body, res);
});

server.post(`/${RESPONSE}/${TASK}2`, (req, res) => {
   updateResponseData(`${RESPONSE}_${TASK}2`, filePath, req.body, res);
});

server.use(router)

server.listen(3004, () => {
   console.log(`JSON Server is running`)
})
