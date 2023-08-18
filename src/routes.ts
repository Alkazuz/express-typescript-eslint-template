import Container from 'typedi';
import { FindAllUserController } from './http/controllers/User/FindAllUserController';
import { app } from './server';

import { Request, Response } from 'express';

export function loadRoutes() {
	app.get('/users', (req: Request, res: Response) =>
		Container.get(FindAllUserController).handle(req, res)
	);
}
