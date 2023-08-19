import Container from 'typedi';
import { FindAllUserController } from './http/controllers/User/FindAllUserController';
import { app } from './server';

import { Request, Response } from 'express';
import PaginatedUserRequest from './http/request/user/PaginatedUserRequest';

export function loadRoutes() {
	app.get('/users', (req: Request, res: Response) =>
		Container.get(FindAllUserController).handle(req, res)
	);

	app.get('/users-paginated', new PaginatedUserRequest().validation, (req: Request, res: Response) =>
		Container.get(PaginatedUserController).handle(req, res)
	);
}
