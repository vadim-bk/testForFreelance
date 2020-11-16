import api from '../../config/api';
import * as types from '../../config/types';

export const getUsers = () => async (dispatch) => {
  dispatch({ type: types.GET_USERS_REQUEST });
  try {
    const data = await api.getUsers();
    dispatch({ type: types.GET_USERS_SUCCESS, data });
  } catch (error) {
    dispatch({ type: types.GET_USERS_FAILURE });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    const data = await api.getUser(id);
    dispatch({ type: types.GET_USER_SUCCESS, data });
  } catch (error) {
    dispatch({ type: types.GET_USER_FAILURE });
  }
};

export const editUser = (fields) => async (dispatch) => {
  dispatch({ type: types.PUT_USER_REQUEST });
  try {
    const data = await api.editUser(fields);
    dispatch({ type: types.PUT_USER_SUCCESS, data });
  } catch (error) {
    dispatch({ type: types.PUT_USER_FAILURE });
  }
};

export const removeUser = (id) => async (dispatch) => {
  try {
    const data = await api.deleteUser(id);
    dispatch({ type: types.DELETE_USER_SUCCESS, data });
  } catch (error) {
    dispatch({ type: types.DELETE_USER_FAILURE });
  }
};
