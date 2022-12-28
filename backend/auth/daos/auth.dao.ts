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

    // Todo: move the prisma create to users module
    async createUser(userFields: CreateUserDto) {

        await this.prisma.user.create({
          data: {
            ...userFields
          },
        })
    }
}

export default new AuthDao();

