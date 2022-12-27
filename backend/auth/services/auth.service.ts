import AuthDao from '../daos/auth.dao';
import { CreateUserDto } from '../dto/create.user.dto';

class AuthService {
    async createUser(resource: CreateUserDto) {
        return AuthDao.createUser(resource);
    }

    // async deleteById(id: string) {
    //     return UsersDao.removeUserById(id);
    // }

    // async list(limit: number, page: number) {
    //     return UsersDao.getUsers(limit, page);
    // }

    // async patchById(id: string, resource: PatchUserDto) {
    //     return UsersDao.updateUserById(id, resource);
    // }

    // async readById(id: string) {
    //     return UsersDao.getUserById(id);
    // }

    // async putById(id: string, resource: PutUserDto) {
    //     return UsersDao.updateUserById(id, resource);
    // }

    // async getUserByEmail(email: string) {
    //     return UsersDao.getUserByEmail(email);
    // }

    // async getUserByEmailWithPassword(email: string) {
    //     return UsersDao.getUserByEmailWithPassword(email);
    // }

}

export default new AuthService();