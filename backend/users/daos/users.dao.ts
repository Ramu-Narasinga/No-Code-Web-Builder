import prismaService from '../../common/services/prisma.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-dao');

class UsersDao {

  prisma = prismaService.getPrismaClient();

  async getUserByEmailWithPassword(email: string) {
    return await this.prisma.user.findUnique({
      where: {
        email: email
      }
    })
  }
}

export default new UsersDao()