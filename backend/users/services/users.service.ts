// import AuthDao from '../daos/auth.dao';
// import { CreateUserDto } from '../dto/create.user.dto';
// import { LoginUserDto } from '../dto/login.user.dto';
import UsersDao from '../daos/users.dao';

class UserService {
    // async createUser(resource: CreateUserDto) {
    //     return AuthDao.createUser(resource);
    // }

    // async loginUser(resource: LoginUserDto) {
    //   return AuthDao.loginUser(resource);
    // }

    async getUserByEmailWithPassword(email: string) {
      return UsersDao.getUserByEmailWithPassword(email);
    }

}

export default new UserService();