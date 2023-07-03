import {
  userRegistration,
  emailVerify,
} from "./registerActions";
import { userLogin } from "./loginActions";
import {
  forgotPassword,
  forgotPasswordReset,
} from "./forgotPassword";
import { resendPhoneOtp } from "./resendPhoneOtp";
import { resendEmailOtp } from "./resendEmailOtp";
import { phoneVerify } from "./phoneVerify";

export {
  userLogin,
  userRegistration,
  emailVerify,
  forgotPassword,
  forgotPasswordReset,
  resendEmailOtp,
  resendPhoneOtp,
  phoneVerify,
};
