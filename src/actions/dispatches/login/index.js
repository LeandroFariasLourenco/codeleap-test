import * as t from '@Redux/ducks/login/types';

export const setLogin = (newState) => ({
  type: t.SET_LOGIN,
  payload: newState,
});
