// import { useEffect, useState } from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthGuarde from '../components/AuthGuarde';
import Login from '../pages/login';
import Top from '../pages/top';
import NotFound from '../pages/notFound';

// URLを設定
const Routers = () => {
  // ローカルストレージからキーを指定して取得
  const localStrageToken = localStorage.getItem('loginToken'); // ログイン状態の維持の判定用
  const token = useSelector((state) => state.logins.loginToken); // 初回ログイン時の判定用

  // ログイン済みかを判定
  const loginCheck = () => {
    if (token || localStrageToken) {
      return true;
    }
    return false;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={loginCheck() ? <Top /> : <AuthGuarde />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
