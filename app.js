import bodyParser from 'body-parser'
import cors from 'cors'
import router from './routes/index.js'
import express from 'express'

const app = express();

app.use(bodyParser.json())
app.use(cors({
    methods: "POST,GET,PUT,DELETE"
}))

app.use(router)

export default app;