import { CreateUserDto } from '../dto/create.user.dto';
import prismaService from '../../common/services/prisma.service';
import debug from 'debug';
import { UpdateUserDto } from '../dto/update.user.dto';

const log: debug.IDebugger = debug('app:in-memory-dao');

class RmrDao {

    prisma = prismaService.getPrismaClient();

    constructor() {
      log('Created new instance of RmrDao');
    }

    async createUser(userFields: CreateUserDto) {

      return await this.prisma.rmr_User.create({
        data: {
          ...userFields
        },
      });
    }

    async updateUser(userFields: UpdateUserDto) {

      return await this.prisma.rmr_User.update({
        where: {
          id: userFields.id,
        },
        data: userFields,
      });
    }
}

export default new RmrDao();

