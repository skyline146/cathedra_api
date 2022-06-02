import express from "express";
import dotenv from 'dotenv'

import { init as ApiInit } from './routes'
import { generalResponseMiddleware } from "./middleware";


dotenv.config();


const app = express()
app.get('/', (_, r) => {
  r.json("HELLO WORLD")
})
app.use(express.json())
app.use('/api', ApiInit())
app.use(generalResponseMiddleware)



export default app




