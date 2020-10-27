import * as t from './types';

const INITIAL_STATE = {
  hasNewPost: false,
};

export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
  case t.SET_HAS_NEW_POST:
    return {
      ...state,
      hasNewPost: payload,
    };
  default:
    return state;
  }
}
