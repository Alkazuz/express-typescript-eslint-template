import { Response } from 'express';
import { HttpCode } from '../../constants/HttpCode';

export default class Controller {
	sendResponse(res: Response, data: unknown, status: HttpCode = 200) {
		return res.status(status).json(data);
	}
}
