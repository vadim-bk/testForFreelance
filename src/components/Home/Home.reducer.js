import * as types from '../../config/types';

const initialState = {
  loading: false,
  users: null,
  currentUser: null,
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST:
      return { ...state, loading: true };
    case types.GET_USERS_SUCCESS:
      return { ...state, loading: false, users: action.data };
    case types.GET_USERS_FAILURE:
      return { ...state, loading: false };

    case types.GET_USER_SUCCESS:
      return { ...state, currentUser: action.data };
    case types.GET_USER_FAILURE:
      return state;

    case types.PUT_USER_REQUEST:
      return { ...state, loading: true };
    case types.PUT_USER_SUCCESS:
      return { ...state, loading: false, users: action.data };
    case types.PUT_USER_FAILURE:
      return { ...state, loading: false };

    case types.DELETE_USER_SUCCESS:
      return { ...state, users: action.data };
    case types.DELETE_USER_FAILURE:
      return state;

    default:
      return state;
  }
};
