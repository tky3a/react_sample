import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Index';
import Top from '../pages/top/Index';
import NotFound from '../pages/notFound/Index';

// URLを設定
const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Top />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
