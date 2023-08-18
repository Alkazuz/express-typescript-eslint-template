import { Service } from 'typedi';
import { prisma } from '../database';
import IUserRepository from './Interfaces/IUserRepository';
import { IUser } from '../models/User';
import { ModelNotFoundException } from '../exceptions/ModelNotFoundException';

@Service()
export class UserRepository implements IUserRepository {
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
