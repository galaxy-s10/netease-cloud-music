import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import saga from './saga'

import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();

const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);
const store = createStore(reducer, storeEnhancer);

sagaMiddleware.run(saga)

export default store;