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
// Post
import { fetchFeedsReducer } from "./Posts/Feeds";
import { fetchLikeReducer } from "./Posts/Like";
import { addCommentReducer } from "./Posts/AddComments";

export const reducers = combineReducers({
  loginState: loginReducer,
  registerState: registerReducer,
  emailVerify: emailVerifyReducer,
  phoneNoVerify: phoneNoVerifyReducer,
  forgotPassword: forgotPasswordReducer,
  forgotPasswordReset: forgotPasswordResetReducer,
  resendPhoneNoOtp: resendPhoneNoOtpReducer,
  resendEmailOtp: resendEmailOtpReducer,
  fetchFeeds: fetchFeedsReducer,
  like: fetchLikeReducer,
  comment: addCommentReducer,
});
