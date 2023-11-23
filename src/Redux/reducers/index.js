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
import { phoneNoVerifyReducer, verifyPhoneReducer } from "./phoneVerifyReducer";
// Post
import {
  fetchFeedsReducer,
  fetchFeedsAnkaraReducer,
  fetchFeedsMenReducer,
  fetchFeedsWomenReducer,
  fetchFeedsNativeReducer,
} from "./Posts/Feeds";
import { fetchLikeReducer, fetchCommentLikeReducer } from "./Posts/Like";
import { addCommentReducer } from "./Posts/AddComments";
import { postDetailReducer } from "./Posts/PostDetail";
import { createPostReducer } from "./Posts/createPost";
import { favoritePostReducer } from "./Posts/FavoritePost";

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
import { locationReducer } from "./Permission";
import { emailCheckReducer, phoneNoCheckReducer } from "./DetailsCheckReducers";
import { fetchCommentReducer } from "./Posts/CommentReducer";
import {
  getOrderReducer,
  getOrderStatusReducer,
} from "./Market/GetOrderReducer";
import { TrackOrderReducer } from "./Market/TrackOrder";
import { NotificationReducer } from "./NotificationReducer";
import { FeedbackReducer } from "./Feedback";
import {
  fetchSForSaleReducer,
  fetchSelfLikeReducer,
  fetchSelfPostReducer,
} from "./ProfileSection";
import { fetchRatingReducer } from "./Posts/Rating";
import {
  chatImageReducer,
  chatListReducer,
  createChatReducer,
} from "./chat/CreateChat";
import { chatLogReducer } from "./chat/ChatLog";
import {
  WSChatListReducer,
  chatsReducer,
  incomingChatListReducer,
  lastChatReducer,
} from "./chat/ChatsReducers";
import { getCompletedOrderReducer } from "./Market/CompletedOrders";
import { FollowReducer } from "./FollowReducer";
import { FollowingReducer } from "./Following";
import { FollowersReducer } from "./Followers";

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
  location: locationReducer,
  phone: phoneNoCheckReducer,
  email: emailCheckReducer,
  commentList: fetchCommentReducer,
  activeOrder: getOrderReducer,
  trackOrder: TrackOrderReducer,
  notification: NotificationReducer,
  feedback: FeedbackReducer,
  commentLike: fetchCommentLikeReducer,
  selfPost: fetchSelfPostReducer,
  forSale: fetchSForSaleReducer,
  like: fetchSelfLikeReducer,
  rating: fetchRatingReducer,
  createChat: createChatReducer,
  verifyPhone: verifyPhoneReducer,
  chatList: chatListReducer,
  chatLog: chatLogReducer,
  chats: chatsReducer,
  lastChat: lastChatReducer,
  status: getOrderStatusReducer,
  chatImage: chatImageReducer,
  completedOrder: getCompletedOrderReducer,
  wsChatList: WSChatListReducer,
  incomingChats: incomingChatListReducer,
  follow: FollowReducer,
  following: FollowingReducer,
  followers: FollowersReducer,
});
