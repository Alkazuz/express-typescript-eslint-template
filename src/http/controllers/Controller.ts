import { Response } from 'express';
import { HttpCode } from '../../constants/HttpCode';

export default class Controller {
	sendResponse(res: Response, data: unknown, status: HttpCode = 200) {
		return res.status(status).json(data);
	}

	sendPaginatedResponse(res: Response, data: unknown, status: HttpCode = 200) {
		return res.status(status).json({
			status: status,
			meta: {
				// total: TODO: add total count
				// current_page: TODO: add current page
				// last_page: TODO: add last page
				// per_page: TODO: add per page
			},
			data: data,
		});
	}
}
