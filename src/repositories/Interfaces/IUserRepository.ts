import { prisma } from '../../database';

export default interface IUserRepository {
	getAll(): Promise<(typeof prisma.User)[]>;
	getById(id: number): Promise<typeof prisma.User>;
}
