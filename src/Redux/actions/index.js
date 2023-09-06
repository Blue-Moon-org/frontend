import { userRegistration, emailVerify } from "./registerActions";
import { userLogin } from "./loginActions";
import { forgotPassword, forgotPasswordReset } from "./forgotPassword";
import { resendPhoneOtp } from "./resendPhoneOtp";
import { resendEmailOtp } from "./resendEmailOtp";
import { phoneVerify } from "./phoneVerify";

// Post
import { fetchFeeds } from "./Post/Feeds";
import { fetchLikes } from "./Post/Like";

export {
  userLogin,
  userRegistration,
  emailVerify,
  forgotPassword,
  forgotPasswordReset,
  resendEmailOtp,
  resendPhoneOtp,
  phoneVerify,

  //Post
  fetchFeeds,
  fetchLikes,
};
