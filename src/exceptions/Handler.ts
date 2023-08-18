import { NextFunction, Request, Response } from 'express';
import { ModelNotFoundException } from './ModelNotFoundException';
import { ENVIROMENT } from '../constants';
import { HttpCode } from '../constants/HttpCode';
import NumberFormatException from './NumberFormatException';

export function handleErrors(
	error: unknown,
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.error(error);
	if (error instanceof ModelNotFoundException) {
		return defaultHandler(error, HttpCode.NOT_FOUND, res);
	} else if (error instanceof NumberFormatException) {
		return defaultHandler(error, HttpCode.BAD_REQUEST, res);
	}
	next(error);
}

function defaultHandler(error: Error, status: HttpCode, res: Response) {
	let data = {
		status,
		exception: error.name,
		message: error.message,
	};
	if (ENVIROMENT === 'development') {
		data = Object.assign(data, { stack: error.stack });
	}
	return res.status(status).json(data);
}
