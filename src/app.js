import express from 'express'
import bodyParser from 'body-parser'
import authorRoutes from './routes/AuthorRoutes'
import BookRoutes from './routes/BookRoutes'
import userRoutes from './routes/UserRoutes'
import sessionRoutes from './routes/SessionRoutes'

const app = express()
const BASE_URI = '/api/v1'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(BASE_URI, sessionRoutes)
app.use(BASE_URI, BookRoutes)
app.use(BASE_URI, authorRoutes)
app.use(BASE_URI, userRoutes)

app.get('*', (req, res) => {
  res.status(200).send({messsage: 'Welcome to this API'})
})

export default app
