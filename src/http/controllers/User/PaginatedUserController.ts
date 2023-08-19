/* eslint-disable @typescript-eslint/ban-ts-comment */
import Controller from '../Controller';
import { Request, Response } from 'express';
import { Service } from 'typedi';
import { UserService } from '../../../services/UserService';

@Service()
export class PaginatedUserController extends Controller {
    constructor(private userService: UserService) {
        super();
    }

    async handle(req: Request, res: Response) {
        // @ts-ignore
        const { page, limit } = req.validatedData;
        const users = await this.userService.paginateUsers(page || 1, limit || 10);
        return this.sendPaginatedResponse(res, users);
    }
}
