import { PrismaClient } from '@prisma/client';

class PrismaService {

  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  getPrismaClient() {
    return this.prisma;
  }

}

export default new PrismaService();
