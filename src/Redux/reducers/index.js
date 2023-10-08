import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { logoutReducer } from "./loginReducer";
import { registerReducer, emailVerifyReducer } from "./registerReducers";
import {
  forgotPasswordReducer,
  forgotPasswordResetReducer,
} from "./forgotPasswordReducers";
import { resendPhoneNoOtpReducer } from "./resendPhoneNoOtpReducer";
import { resendEmailOtpReducer } from "./resendEmailOtpReducer";
import { phoneNoVerifyReducer } from "./phoneVerifyReducer";
// Post
import {
  fetchFeedsReducer,
  fetchFeedsAnkaraReducer,
  fetchFeedsMenReducer,
  fetchFeedsWomenReducer,
  fetchFeedsNativeReducer,
} from "./Posts/Feeds";
import { fetchLikeReducer } from "./Posts/Like";
import { addCommentReducer } from "./Posts/AddComments";
import { postDetailReducer } from "./Posts/PostDetail";
import { createPostReducer } from "./Posts/createPost";
import { favoritePostReducer } from "./Posts/Feeds";

//market
import { fetchMarketReducer } from "./Market/market";
import { createMarketReducer } from "./Market/marketCreate";
import { addToCartReducer } from "./Market/AddToCart";
import { cartViewReducer } from "./Market/CartView";
import { checkOutReducer } from "./Market/Checkout";
import {
  latestSearchReducer,
  peopleSearchReducer,
  postSearchReducer,
  productSearchReducer,
} from "./Posts/search";
import { userUpdateReducer } from "./DetailsUpdate";

export const reducers = combineReducers({
  loginState: loginReducer,
  logoutState: logoutReducer,
  registerState: registerReducer,
  emailVerify: emailVerifyReducer,
  phoneNoVerify: phoneNoVerifyReducer,
  forgotPassword: forgotPasswordReducer,
  forgotPasswordReset: forgotPasswordResetReducer,
  resendPhoneNoOtp: resendPhoneNoOtpReducer,
  resendEmailOtp: resendEmailOtpReducer,
  fetchFeedsAll: fetchFeedsReducer,
  fetchFeedsMen: fetchFeedsMenReducer,
  fetchFeedsWomen: fetchFeedsWomenReducer,
  fetchFeedsNative: fetchFeedsNativeReducer,
  fetchFeedsAnkara: fetchFeedsAnkaraReducer,
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
  latest: latestSearchReducer,
  people: peopleSearchReducer,
  post: postSearchReducer,
  product: productSearchReducer,
  update: userUpdateReducer,
});
