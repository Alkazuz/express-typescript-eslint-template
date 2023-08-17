import express from 'express'
import dotenv from 'dotenv'
import { handleErrors } from './exceptions/Handler'
import { ModelNotFoundException } from './exceptions/ModelNotFoundException'
dotenv.config()

const port = process.env.PORT || 3000
const app = express()


app.get('/test', () => {
	throw new ModelNotFoundException('User') 
})


app.use(handleErrors)

app.listen(port, () => console.log(`Server is running on port ${port}`))