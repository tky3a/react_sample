/* eslint-disable no-unused-vars */
import {
  call, put, takeEvery, takeLatest, select,
} from 'redux-saga/effects';
import { loginStart, setToken, tokenSelector } from './loginSlice';
import { fetchRequest } from '../../config/networkController';

function* callLoginApi({ mail, password }) {
  console.log('aaa');
  // sliceのアクションをディスパッチ（ローディングモードにする）
  yield put(loginStart());

  try {
    const requestUrl = 'api/v1/login'; // 仮
    const requestBody = { mail, password }; // 分割代入
    const token = yield select(tokenSelector); // selectを使ってreduxの値を取得
    const requestHeader = { headers: { Authorization: `bearer${token}` } };
    // const body = {mail: mail, password: password}

    // APIコール
    yield call([fetchRequest, 'post'], requestUrl, requestBody, requestHeader);
  } catch (e) {
    console.log('errorです', e);
  }
}

export const loginApi = ({ mail = '', password = '' }) => {
  console.log('kiteru>?', mail, password);
  return ({
    type: 'LOGIN_API',
    mail,
    password,
  });
};

export function* loginSaga() {
  yield takeLatest('LOGIN_API', callLoginApi);
}
