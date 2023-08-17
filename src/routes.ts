import FindHourController from './http/controllers/Hour/FindHourController'
import FindSumController from './http/controllers/Sum/FindSumController'
import { app } from './server'

import { Request, Response } from 'express'

export function loadRoutes() {
	app.use('/hora', (req: Request, res: Response) => new FindHourController().handle(req, res))
	app.post('/soma', (req: Request, res: Response) => new FindSumController().handle(req, res))
}