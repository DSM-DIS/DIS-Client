import createSaga from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const saga = createSaga();

const saga = createStore(composeWithDevTools(applyMiddleware(saga)));

saga.run();

export default StoreExceptionsInformation;
