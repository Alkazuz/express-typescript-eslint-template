import { Service } from 'typedi';
import { UserRepository } from '../repositories/UserRepository';
import { ModelNotFoundException } from '../exceptions/ModelNotFoundException';

@Service()
export class UserService {
	constructor(private userRepository: UserRepository) { }

	async paginateUsers(page: number, limit: number) {
		return await this.userRepository.paginate(page, limit);
	}

	async getAllUsers() {
		return await this.userRepository.getAll();
	}

	async getUserById(id: number) {
		const user = await this.userRepository.getById(id);
		if (!user) {
			throw new ModelNotFoundException('User');
		}
		return user;
	}
}
