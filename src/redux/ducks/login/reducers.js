import * as t from './types';

const INITIAL_STATE = {
  isLogged: !!sessionStorage.getItem('userLogged'),
  userName: sessionStorage.getItem('userName'),
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SET_LOGIN:
    return {
      ...state,
      isLogged: payload.isLogged,
      userName: payload.userName,
    };
  default:
    return state;
  }
}
