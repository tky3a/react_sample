import { Navigate } from 'react-router-dom';

// ここに遷移したらログインできていないため自動的にログインへリダイレクト
const AuthGuarde = () => (
  <Navigate to="/login" replace />
);

export default AuthGuarde;
