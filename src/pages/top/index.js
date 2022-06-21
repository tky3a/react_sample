// import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import PageBody from '../../components/PageBody';
import Header from '../../components/Header';
import ChatList from '../../components/ChatList';

const Top = React.memo(() => (
  <>
    <Header />
    <PageBody>
      <h2>チャット一覧</h2>
      <ChatList />
    </PageBody>
  </>
));

export default Top;
