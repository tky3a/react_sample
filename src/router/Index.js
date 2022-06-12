import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import AuthGuarde from '../components/AuthGuarde';
import Login from '../pages/login';
import Top from '../pages/top';
import NotFound from '../pages/notFound';

// URLを設定
const Routers = () => {
  // const token = useSelector((state) => state.logins.loginToken);
  // ローカルストレージからキーを指定して取得
  const token = localStorage.getItem('loginToken');
  console.log('routerでtokenは取得できてないのか？', token);

  // ログイン済みかを判定
  const loginCheck = () => {
    console.log('>??????/', token);
    if (!token) {
      console.log('ここにはきてないよね？');
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
