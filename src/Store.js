
import { combineReducers } from "redux";
import { createStore} from 'redux';
import newNumber from "./Reducer/UseReducer";

const reducers =combineReducers({newNumber});

const store = createStore(reducers, {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;