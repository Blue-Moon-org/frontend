import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducers";

export const reducers = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
});
