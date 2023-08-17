import express, { Response } from 'express'
import dotenv from 'dotenv'
import { handleErrors } from './exceptions/Handler'
import { loadRoutes } from './routes'
dotenv.config()

const port = process.env.PORT || 3000
export const app = express()

app.use(handleErrors)

loadRoutes()

app.listen(port, () => console.log(`Server is running on port ${port}`))
