import express from 'express' 
import { routes } from './routes/index.js'
import cookieSession from 'cookie-session'

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieSession({
  name: 'session',
  secret: 'jhioiurhnadkjobafskjlodifjangalsd',
  maxAge: 24 * 3600 
}))
routes(app)

app.listen(port, () => {
  console.log('Running')
})
