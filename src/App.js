import './App.css';
import { Provider } from 'react-redux';
import Routers from './router/Index';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);

export default App;
