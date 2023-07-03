import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { registerReducer, emailVerifyReducer } from "./registerReducers";
import {
  forgotPasswordReducer,
  forgotPasswordResetReducer,
} from "./forgotPasswordReducers";
import { resendPhoneNoOtpReducer } from "./resendPhoneNoOtpReducer";
import { resendEmailOtpReducer } from "./resendEmailOtpReducer";
import { phoneNoVerifyReducer } from "./phoneVerifyReducer";

export const reducers = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  emailVerify: emailVerifyReducer,
  phoneNoVerify: phoneNoVerifyReducer,
  forgotPassword: forgotPasswordReducer,
  forgotPasswordReset: forgotPasswordResetReducer,
  resendPhoneNoOtp: resendPhoneNoOtpReducer,
  resendEmailOtp: resendEmailOtpReducer,
});
