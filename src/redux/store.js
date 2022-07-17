import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer, // reducerを設定
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
