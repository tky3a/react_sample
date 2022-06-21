// import { Link, useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';
import styled from 'styled-components';

// チャットリスト枠
const ListArea = styled.div`
min-height: 100px;
border: solid;
padding-left: 8px;
padding-right: 8px;
background: white;
&:hover {
  opacity: 0.7;
  cursor : pointer;
}
&:active {
  opacity: 0.2;
}`;

// テキスト
const Text = styled.p`
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`;

// チャット一覧
const ChatList = React.memo(({ title = 'タイトル', text = '内容' }) => {
  const onClickChatList = useCallback(() => {
    console.log('click');
  }, []);

  return (
    <ListArea onClick={() => {
      onClickChatList();
    }}
    >
      <Text>{title}</Text>
      <Text>{text}</Text>
    </ListArea>
  );
});

export default ChatList;
