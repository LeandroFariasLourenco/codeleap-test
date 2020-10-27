import * as t from '@Redux/ducks/home/types';

export const setHasNewPost = (newState) => ({
  type: t.SET_HAS_NEW_POST,
  payload: newState,
});
