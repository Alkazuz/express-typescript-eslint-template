import { Service } from 'typedi';
import { prisma } from '../database';
import IUserRepository from './Interfaces/IUserRepository';
import { ModelNotFoundException } from '../exceptions/ModelNotFoundException';
import { IUser } from '../Models/User';

@Service()
export class UserRepository implements IUserRepository {
  async paginate(page: number, limit: number): Promise<IUser[]> {
    const users = await prisma.user.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return users;
  }

  async getAll(): Promise<IUser[]> {
    return await prisma.user.findMany();
  }

  async getById(id: number): Promise<IUser> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) {
      throw new ModelNotFoundException('User');
    }

    return user;
  }
}
