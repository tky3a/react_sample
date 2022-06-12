import { combineReducers } from '@reduxjs/toolkit';
// 以下にsliceをimport
import { loginSlice } from './login/loginSlice';
import { topSlice } from './top/topSlice';

// 各reducerを設定する
const rootReducer = combineReducers({
  logins: loginSlice.reducer,
  tops: topSlice.reducer,
});

export default rootReducer;
