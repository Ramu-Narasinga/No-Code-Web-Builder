import AuthDao from '../daos/auth.dao';
import { CreateUserDto } from '../dto/create.user.dto';
class AuthService {

    async createUser(resource: CreateUserDto) {
        return AuthDao.createUser(resource);
    }
}

export default new AuthService();