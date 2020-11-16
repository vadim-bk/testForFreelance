import { usersData } from '../mocks';

export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const fakeApi = (data, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const showRandomError = getRandomInt(9) === 5;

      if (showRandomError) {
        reject({ message: 'Error message' });
      } else {
        resolve(data);
      }
    }, timeout);
  });
};

export const fakeApiGetUser = (id, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const showRandomError = getRandomInt(9) === 5;

      if (showRandomError) {
        reject({ message: 'Error message' });
      } else {
        resolve(usersData.filter((user) => user.id === id)[0]);
      }
    }, timeout);
  });
};

export const fakeApiCreate = (data, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const showRandomError = getRandomInt(9) === 5;

      if (showRandomError) {
        reject({ message: 'Error message' });
      } else {
        resolve(usersData.push(data));
      }
    }, timeout);
  });
};

export const fakeApiEdit = (data, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const showRandomError = getRandomInt(9) === 5;

      if (showRandomError) {
        reject({ message: 'Error message' });
      } else {
        const updatedUsers = usersData.map((user) => {
          if (user.id === data.id) {
            return data;
          }
          return user;
        });
        resolve(updatedUsers);
      }
    }, timeout);
  });
};

export const fakeApiRemove = (id, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const showRandomError = getRandomInt(9) === 5;

      if (showRandomError) {
        reject({ message: 'Error message' });
      } else {
        const updatedUsers = usersData.filter((user) => +user.id !== +id);
        resolve(updatedUsers);
      }
    }, timeout);
  });
};
