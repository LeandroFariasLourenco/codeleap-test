import { combineReducers } from 'redux';

import login from './login';
import overlay from './overlay';

export default combineReducers({
  login,
  overlay,
});
