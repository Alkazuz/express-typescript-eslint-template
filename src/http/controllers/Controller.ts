import { Response } from 'express'

export default class Controller {
	sendResponse(res: Response, data: unknown, status: number = 200) {
		return res.status(status).json(data)
	}
}