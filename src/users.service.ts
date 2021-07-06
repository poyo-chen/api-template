import UsersDao from './users.dao';
import { CRUD } from './crud.interface';
import { UserDto } from './user.dto';

class UsersService implements CRUD {
  async create(resource: UserDto) {
    return UsersDao.addUser(resource);
  }
  async listAll() {
    return UsersDao.getUsers();
  }
}
export default new UsersService();
