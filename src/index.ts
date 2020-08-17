import express, { Response, Request, NextFunction } from 'express'
import { routes } from './routes'
import cors from 'cors'
import './database'

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())

app.use(cors())
app.use(routes)
app.listen(PORT, () => {
    console.log('server is running on PORT: ', PORT)
})