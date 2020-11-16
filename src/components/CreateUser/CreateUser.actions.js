import api from '../../config/api';
import * as types from '../../config/types';

export const createUser = (fields) => async (dispatch) => {
  dispatch({ type: types.CREATE_USER_REQUEST });
  try {
    await api.createUser(fields);
    dispatch({ type: types.CREATE_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: types.CREATE_USER_FAILURE });
  }
};
