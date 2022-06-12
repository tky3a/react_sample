import { createSlice } from '@reduxjs/toolkit';

// 初期値設定
const loginInitialState = {
  loginToken: '',
};

export const loginSlice = createSlice({
  name: 'logins',
  initialState: loginInitialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.loginToken = payload;
    },
  },
});

// コンポーネントからアクションをimportできるよう設定
export const { setToken } = loginSlice.actions;

export default loginSlice;
