import FindHourController from './http/controllers/Hour/FindHourController'
import { app } from './server'

import { Request, Response } from 'express'

export function loadRoutes() {
	app.use('/hora', (req: Request, res: Response) => new FindHourController().handle(req, res))
}