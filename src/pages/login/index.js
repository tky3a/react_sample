import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import {
  Label, FormGroup, Input, Message,
} from '../../components/forms';
import PageBody from '../../components/PageBody';
import { setToken } from '../../redux/login/loginSlice';

// import { pc, sp, tab } from '../../media';

// TODO: reduxとカスタムフック
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userIdMessage, setUserIdMessage] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordMessage, setUserPasswordMessage] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  // style
  const styles = {
    buttonCenter: {
      justifyContent: 'center',
      display: 'flex',
    },
  };

  // inputの入力値を取得
  const handleChange = (e) => {
    console.log('event', e);
    if (e.target.name === 'userId') {
      setUserId(() => e.target.value);
      // 入力されたらメッセージ初期化
      if (e.target.value.length >= 1) {
        setUserIdMessage('');
      }
    } else {
      setUserPassword(() => e.target.value);
      // 入力されたらメッセージ初期化
      if (e.target.value.length >= 1) {
        setUserPasswordMessage('');
      }
    }
  };

  useEffect(() => {
    if (isLogin) {
      navigate('/', { replace: true });
    }
  }, [navigate, isLogin]);

  // 入力値チェック
  const loginCheck = () => {
    // ログイン成功
    if (userId && userPassword) {
      dispatch(setToken('token'));
      setIsLogin(true);
      // reduxではリロードで消えるため、ログインの維持にはローカルストレージで保持
      localStorage.setItem('loginToken', 'token');
    }

    // ログイン失敗
    if (!userId) {
      setUserIdMessage('ユーザーIDを入力してください。');
    }
    if (!userPassword) {
      setUserPasswordMessage('パスワードを入力してください。');
    }
  };

  return (
    <PageBody>
      <h2>Login Page</h2>
      <FormGroup>
        <Label>ユーザーID</Label>
        <Input value={userId} onChange={handleChange} name="userId" type="text" />
        <Message>{userIdMessage}</Message>
      </FormGroup>
      <FormGroup>
        <Label>パスワード</Label>
        <Input value={userPassword} onChange={handleChange} name="userPassword" type="password" />
        <Message>{userPasswordMessage}</Message>
      </FormGroup>
      <div style={styles.buttonCenter}>
        <Button color="blue" onClick={() => loginCheck()}>ログイン</Button>
      </div>
    </PageBody>
  );
};

// レスポンシブにする方法
// const Box = styled.div`
//     background-color: red;
//     ${sp`
//         width: 20px;
//         height: 20px;
//     `}
//     ${tab`
//         width: 50px;
//         height: 50px;
//     `}
//     ${pc`
//         width: 100px;
//         height: 100px;
//     `}
// `;

export default Login;
