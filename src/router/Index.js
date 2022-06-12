import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthGuarde from '../components/AuthGuarde';
import Login from '../pages/login/Index';
import Top from '../pages/top/Index';
import NotFound from '../pages/notFound/Index';

// URLを設定
const Routers = () => {
  const token = useSelector((state) => state.logins.loginToken);

  // ログイン済みかを判定
  const loginCheck = () => {
    if (!token) {
      return false;
    }
    return true;
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
