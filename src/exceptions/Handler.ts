import { NextFunction, Request, Response } from 'express'
import { ModelNotFoundException } from './ModelNotFoundException'

export function handleErrors(error: unknown, req: Request, res: Response, next: NextFunction) {
	if (error instanceof ModelNotFoundException) {
		return defaultHandler(error, 404, res)
	}   
	next(error)
}

function defaultHandler(error: Error, status: number, res: Response) {
	const data = {
		status: status,
		exception: error.name,
		message: error.message
	}
	return res.status(status).json(data)
}