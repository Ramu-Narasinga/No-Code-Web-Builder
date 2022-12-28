import UsersDao from '../daos/users.dao';
import { CreateUserDto } from '../dto/create.user.dto';

class UserService {
    
    async createUser(resource: CreateUserDto) {
      return UsersDao.createUser(resource);
    }

    async getUserByEmailWithPassword(email: string) {
      return UsersDao.getUserByEmailWithPassword(email);
    }

}

export default new UserService();