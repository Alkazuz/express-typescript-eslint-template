import Container, { Service } from 'typedi'
import IUserRepository from '../repositories/Interfaces/IUserRepository'
import { UserRepository } from '../repositories/UserRepository'
import { ModelNotFoundException } from '../exceptions/ModelNotFoundException'

@Service()
class UserService {
    private userRepository: IUserRepository

    constructor() {
        this.userRepository = new UserRepository()
    }

    async getAllUsers() {
        return await this.userRepository.getAll()
    }

    async getUserById(id: number) {
        const user = await this.userRepository.getById(id)
        if (!user) {
            throw new ModelNotFoundException('User')
        }
        return user
    }
}

export const userService = Container.get(UserService);