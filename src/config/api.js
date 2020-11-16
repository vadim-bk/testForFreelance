import { usersData } from '../mocks';
import { fakeApi, fakeApiCreate, fakeApiEdit, fakeApiRemove, fakeApiGetUser } from '../helpers';

export default {
  getUsers: async () => await fakeApi(usersData),
  getUser: async (id) => await fakeApiGetUser(id),
  editUser: async (user) => await fakeApiEdit(user),
  deleteUser: async (id) => await fakeApiRemove(id),
  createUser: async (user) => await fakeApiCreate(user),
};
