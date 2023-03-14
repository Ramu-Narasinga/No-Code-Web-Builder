import UsersDao from '../daos/users.dao';
import { CreateUserDto } from '../dto/create.user.dto';

class UserService {
    
    async createUser(resource: CreateUserDto) {
      console.log("resource ini yserservice", resource);
      return await UsersDao.createUser(resource);
    }

    async getUserByEmailWithPassword(email: string) {
      return await UsersDao.getUserByEmailWithPassword(email);
    }

}

export default new UserService();