import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { root } from "./sagas";

import reducer from "./reducers";

const sagas = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagas));
sagas.run(root);
export default store;
