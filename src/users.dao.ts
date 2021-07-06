import { UserDto } from './user.dto';
import { UsersDto } from './users.dto';
import firestoreService from './firestore.service';

class UsersDao {
  // 資料暫時放這@@
  constructor() {
    console.log('Created new instance of UsersDao');
  }
  async addUser(user: UserDto) {
    const usersData: UsersDto = <UsersDto>await firestoreService.getAll();
    const arr: Array<UserDto> = usersData.users;
    arr.push(user);
    await firestoreService.update(usersData.users);
    return user.id;
  }
  async getUsers() {
    return await firestoreService.getAll();
  }
}
export default new UsersDao();
