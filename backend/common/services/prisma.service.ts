import { PrismaClient } from '@prisma/client';

class PrismaService {

  getPrismaClient() {
    return new PrismaClient();
  }

}

export default new PrismaService();
