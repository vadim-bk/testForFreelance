import { usersData } from '../mocks';
import { fakeApi } from '../helpers';
import { getRandomInt } from '../helpers/index';

export const getUsers = async () => await fakeApi(usersData);
export const editUser = async (user) => await fakeApi(user);
export const deleteUser = async (user) => await fakeApi(user);
export const createUser = async (user) => {
  const id = `${getRandomInt(100)} ${new Date()}`;
  return await fakeApi({ ...user, id });
};
