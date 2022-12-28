import prismaService from '../../common/services/prisma.service';
import debug from 'debug';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from '../dto/create.user.dto';

const log: debug.IDebugger = debug('app:users-dao');

class UsersDao {

  prisma: PrismaClient;

  constructor() {
    this.prisma = prismaService.getPrismaClient();
  }

  async getUserByEmailWithPassword(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }

  async createUser(userFields: CreateUserDto) {

    await this.prisma.user.create({
      data: {
        ...userFields
      },
    })
  }
}

export default new UsersDao()