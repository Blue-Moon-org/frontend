import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import {
  registerReducer,
  emailVerifyReducer,
  phoneNoVerifyReducer,
} from "./registerReducers";
import {
  forgotPasswordReducer,
  forgotPasswordResetReducer,
  forgotPasswordVerificationReducer,
} from "./forgotPasswordReducers";

export const reducers = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  emailVerify: emailVerifyReducer,
  phoneNoVerify: phoneNoVerifyReducer,
  forgotPassword: forgotPasswordReducer,
  forgotPasswordVerification: forgotPasswordVerificationReducer,
  forgotPasswordReset: forgotPasswordResetReducer,
});
