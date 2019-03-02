import { combineReducers } from 'redux';
import settings from './settings/reducer';
import menu from './menu/reducer';
import authUser from './auth/reducer';

const reducers = combineReducers({
  authUser,
  menu,
  settings,
});

export default reducers;