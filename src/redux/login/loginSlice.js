import { createSlice } from '@reduxjs/toolkit';

// 初期値設定
const loginInitialState = {
  isLoading: false,
  loginToken: '',
};

export const loginSlice = createSlice({
  name: 'logins',
  initialState: loginInitialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
    },
    setToken: (state, { payload }) => {
      state.loginToken = payload;
    },
    logout: (state) => {
      state.loginToken = '';
    },
  },
});

// コンポーネントからアクションをimportできるよう設定
export const { loginStart, setToken, logout } = loginSlice.actions;

// selector設定 sagaで取得できるように
export const tokenSelector = (state) => state.logins.loginToken;

export default loginSlice;
