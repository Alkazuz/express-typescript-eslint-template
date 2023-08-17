import Controller from '../Controller'
import { Request, Response } from 'express'
import { UserRepository } from '../../../repositories/UserRepository'

export default class FindAllUserController extends Controller {
    constructor(private userRepository: UserRepository) {
        super()
    }

    handle(_: Request, res: Response) {
        const users = this.userRepository.getAll()

        return this.sendResponse(res, users)
    }
}