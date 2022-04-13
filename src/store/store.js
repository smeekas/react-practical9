import userReducer from "../reducers/userReducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(userReducer,composeWithDevTools());
export default store;
