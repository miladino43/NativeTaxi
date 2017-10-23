import { combineReducers } from 'redux';
import { HomeReducer as home } from '../routes/Home/module/home';
// import { RegistrationReducer as registration } from '../routes/Login/modules/registration';
// import { reducer as UtilReducer } from '../util/reducer';
import { reducer as persistReducer } from './persist/reducer';

export default combineReducers({
  home,
  persistReducer,
  
});
