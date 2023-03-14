"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
class PrismaService {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    getPrismaClient() {
        return this.prisma;
    }
}
exports.default = new PrismaService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpc21hLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9tb2R1bGVzL2NvbW1vbi9zZXJ2aWNlcy9wcmlzbWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE4QztBQUU5QyxNQUFNLGFBQWE7SUFJakI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FFRjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMifQ==