import * as t from './types';

export const togglePopup = (state) => ({
  type: t.TOGGLE_POPUP,
  payload: state,
});

export const setLogin = (state) => ({
  type: t.SET_LOGIN,
  payload: state,
});
