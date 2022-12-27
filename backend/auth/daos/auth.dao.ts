import { CreateUserDto } from '../dto/create.user.dto';
import prismaService from '../../common/services/prisma.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:in-memory-dao');

class AuthDao {
    user: CreateUserDto;

    prisma = prismaService.getPrismaClient();

    constructor() {
        log('Created new instance of UsersDao');
        this.user = {} as CreateUserDto;
    }

    async createUser(userFields: CreateUserDto) {

        await this.prisma.user.create({
          data: {
            ...userFields
          },
        })
    }
}

export default new AuthDao();

