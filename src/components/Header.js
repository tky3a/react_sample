import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/login/loginSlice';
// import { pc, sp, tab } from '../../media';

// 画面の一番外側のdiv
const HeaderArea = styled.div`
display: flex;
flex-direction: row;
padding-left: 8px;
padding-right: 8px;
background: black;
`;

// Linkをstyled-component化
const LogoutLink = styled(Link)`
color: white;
`;

const styles = {
  logout: {
    marginLeft: 'auto',
    color: 'white',
    alignItems: 'center',
    display: 'flex',
  },
  title: {
    color: 'white',
  },
};

const Header = () => {
  console.log('header');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ログアウト処理
  const onClickLogout = () => {
    // localStrageとreduxからtokenを削除
    dispatch(setToken('logout'));
    localStorage.removeItem('loginToken');
    // ログイン画面に戻る
    navigate('/login');
  };

  return (
    <HeaderArea>
      <h2 style={styles.title}>React Sample</h2>
      <div style={styles.logout}>
        <LogoutLink style={{ textDecoration: 'none' }} to="#" onClick={() => onClickLogout()}>
          ログアウト
        </LogoutLink>
      </div>
    </HeaderArea>
  );
};

export default Header;

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
