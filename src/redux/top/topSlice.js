import { createSlice } from '@reduxjs/toolkit';

// 初期値設定
const topInitialState = {
  topData: {},
};

export const topSlice = createSlice({
  name: 'tops',
  initialState: topInitialState,
  reducers: {
    setTopData: (state, { payload }) => {
      state.topData = payload;
    },
  },
});

// コンポーネントからアクションをimportできるよう設定
export const { setTopData } = topSlice.actions;

export default topSlice;
