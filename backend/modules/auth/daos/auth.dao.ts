import { CreateUserDto } from '../dto/create.user.dto';
import prismaService from '../../common/services/prisma.service';
import debug from 'debug';
import { LoginUserDto } from '../dto/login.user.dto';
import usersService from '../../users/services/users.service';

const log: debug.IDebugger = debug('app:in-memory-dao');

class AuthDao {

    prisma = prismaService.getPrismaClient();

    constructor() {
        log('Created new instance of UsersDao');
    }

    async deleteUser(userEmail: string) {
      try {
        return await this.prisma.user.delete({
          where: {
            email: userEmail,
          },
        });
      } catch(error) {
        console.error("Error in deleting in user in dao", error);
      }
    }
}

export default new AuthDao();

