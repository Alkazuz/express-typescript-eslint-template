import Controller from '../Controller';
import { Request, Response } from 'express';
import { Service } from 'typedi';
import { UserService } from '../../../services/UserService';

@Service()
export class FindAllUserController extends Controller {
	constructor(private userService: UserService) {
		super();
	}

	async handle(_: Request, res: Response) {
		const users = await this.userService.getAllUsers();
		return this.sendResponse(res, users);
	}
}
