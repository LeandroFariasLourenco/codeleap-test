import * as t from './types';

const INITIAL_STATE = {
  isLogged: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SET_LOGIN:
    return {
      ...state,
      isLogged: payload,
    };
  default:
    return state;
  }
}
