/* eslint-disable import/prefer-default-export */
import axiosBase from 'axios';
import { DOMAIN } from './networkConfig';

const createAxios = () => (
  axiosBase.create({
    baseURL: DOMAIN,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      //   他に必要な値があれば追加
    },
    responseType: 'json',
    timeout: 10 * 1000,
    withCredentials: true, // Cookieを送信するのに必要
  })
);

const fetchRequest = createAxios();

fetchRequest.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (err) => Promise.reject(err),
);

export { fetchRequest };
