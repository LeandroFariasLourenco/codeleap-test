import * as t from './types';

const INITIAL_STATE = {
  loginPopupOpen: false,
  isLogged: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.TOGGLE_POPUP:
    return {
      ...state,
      loginPopupOpen: payload,
    };
  case t.SET_LOGIN:
    return {
      ...state,
      isLogged: payload,
    };
  default:
    return state;
  }
}
