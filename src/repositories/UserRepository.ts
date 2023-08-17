import { prisma } from '../database'
import IUserRepository from './Interfaces/IUserRepository'

export class UserRepository implements IUserRepository {

	async getAll(): Promise<typeof prisma.User[]> {
		return await prisma.User.findMany()
	}

	async getById(id: number): Promise<typeof prisma.User> {
		return await prisma.User.findUnique({
			where: {
				id: id
			}
		})
	}
}