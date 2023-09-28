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
import { favoritePostReducer } from "./Posts/FavoritePost";
import { postDetailReducer } from "./Posts/PostDetail";
import { createPostReducer } from "./Posts/createPost";

//market
import { fetchMarketReducer } from "./Market/market";
import { createMarketReducer } from "./Market/marketCreate";
import { addToCartReducer } from "./Market/AddToCart";
import { cartViewReducer } from "./Market/CartView";
import { checkOutReducer } from "./Market/Checkout";

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
  favourite: favoritePostReducer,
  postDetail: postDetailReducer,
  createPost: createPostReducer,
  marketList: fetchMarketReducer,
  marketCreate: createMarketReducer,
  addToCart: addToCartReducer,
  cartView: cartViewReducer,
  checkOut: checkOutReducer,
});
