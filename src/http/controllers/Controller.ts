import { Response } from 'express'

export default class Controller {
	sendResponse(res: Response, data: any, status: number = 200) {
		return res.status(status).json(data)
	}
}