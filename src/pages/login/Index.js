import Button from '../../components/Button';

// TODO: reduxとカスタムフック
const Login = () => (
  <>
    <h2>Login Page</h2>
    <div>
      <Button color="blue" onClick={() => { console.log(11234); }}>ログイン</Button>
    </div>
  </>
);

export default Login;
