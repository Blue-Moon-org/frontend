import {
  actionTypesForSale,
  actionTypesSelfLiked,
  actionTypesSelfPosts,
} from "../constants/ProfileSection";

const initialState = {
  //all
  dataPost: [],
  moreLoadingPost: false,
  isListEndPost: "",
  moreErrorPost: false,
  errorPost: "",
  loadingPost: false,

  //men
  dataForSale: [],
  moreLoadingSale: false,
  isListEndSale: "",
  moreErrorSale: false,
  errorForSale: "",
  loadingForSale: false,

  //women
  dataSelfLike: [],
  moreLoadingSelfLike: false,
  isListEndSelfLike: "",
  moreErrorSelfLike: false,
  errorSelfLike: "",
  loadingSelfLike: false,
};

export const fetchSelfPostReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesSelfPosts.SELF_POST_LOADING:
      return {
        ...state,
        dataPost: [],
        moreLoadingPost: false,
        isListEndPost: "",
        moreErrorPost: false,
        errorPost: "",
        loadingPost: true,
      };
    case actionTypesSelfPosts.SELF_POST_SUCCESS:
      return {
        ...state,
        dataPost: [...state.dataPost, ...payload.response?.data?.data?.posts],
        moreLoadingPost: false,
        isListEndPost: isListEnd,
        moreErrorPost: false,
        errorPost: "",
        loadingPost: false,
      };
    case actionTypesSelfPosts.SELF_POST_MORE_LOADING:
      return {
        ...state,
        moreLoadingPost: true,
        isListEndPost: "",
        moreErrorPost: false,
        errorPost: "",
        loadingPost: false,
      };

    case actionTypesSelfPosts.SELF_POST_ERROR:
      return {
        ...state,
        dataPost: [],
        moreLoadingPost: false,
        isListEndPost: "",
        moreErrorPost: false,
        errorPost: error,
        loadingPost: false,
      };
    case actionTypesSelfPosts.SELF_POST_MORE_ERROR:
      return {
        ...state,
        moreLoadingPost: false,
        isListEndPost: "",
        moreErrorPost: error,
        errorPost: "",
        loadingPost: false,
      };

    default:
      return state;
  }
};

export const fetchSForSaleReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesForSale.FOR_SALE_LOADING:
      return {
        ...state,
        dataForSale: [],
        moreLoadingSale: false,
        isListEndSale: "",
        moreErrorSale: false,
        errorForSale: "",
        loadingForSale: true,
      };

    case actionTypesForSale.FOR_SALE_MORE_LOADING:
      return {
        ...state,
        moreLoadingSale: false,
        isListEndSale: "",
        moreErrorSale: false,
        errorForSale: "",
        loadingForSale: false,
      };

    case actionTypesForSale.FOR_SALE_SUCCESS:
      return {
        ...state,
        dataForSale: [
          ...state.dataForSale,
          ...payload.response?.data?.data?.products,
        ],
        moreLoadingSale: false,
        isListEndSale: isListEnd,
        moreErrorSale: false,
        errorForSale: "",
        loadingForSale: false,
      };

    case actionTypesForSale.FOR_SALE_ERROR:
      return {
        ...state,
        dataForSale: [],
        moreLoadingSale: false,
        isListEndSale: "",
        moreErrorSale: false,
        errorForSale: error,
        loadingForSale: false,
      };

    case actionTypesForSale.FOR_SALE_MORE_ERROR:
      return {
        ...state,
        // dataForSale: [],
        moreLoadingSale: false,
        isListEndSale: "",
        moreErrorSale: error,
        errorForSale: "",
        loadingForSale: false,
      };

    default:
      return state;
  }
};

export const fetchSelfLikeReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesSelfLiked.SELF_LIKE_LOADING:
      return {
        ...state,
        dataSelfLike: [],
        moreLoadingSelfLike: false,
        isListEndSelfLike: "",
        moreErrorSelfLike: false,
        errorSelfLike: "",
        loadingSelfLike: true,
      };
    case actionTypesSelfLiked.SELF_LIKE_MORE_LOADING:
      return {
        ...state,
        moreLoadingSelfLike: true,
        isListEndSelfLike: "",
        moreErrorSelfLike: false,
        errorSelfLike: "",
        loadingSelfLike: false,
      };

    case actionTypesSelfLiked.SELF_LIKE_SUCCESS:
      return {
        ...state,
        dataSelfLike: [
          ...state.dataSelfLike,
          ...payload.response.data.data.posts,
        ],
        moreLoadingSelfLike: false,
        isListEndSelfLike: isListEnd,
        moreErrorSelfLike: false,
        errorSelfLike: "",
        loadingSelfLike: false,
      };

    case actionTypesSelfLiked.SELF_LIKE_ERROR:
      return {
        ...state,
        // dataSelfLike: [],
        moreLoadingSelfLike: false,
        isListEndSelfLike: "",
        moreErrorSelfLike: false,
        errorSelfLike: error,
        loadingSelfLike: false,
      };

    case actionTypesSelfLiked.SELF_LIKE_MORE_ERROR:
      return {
        ...state,
        moreLoadingSelfLike: false,
        isListEndSelfLike: "",
        moreErrorSelfLike: error,
        errorSelfLike: "",
        loadingSelfLike: false,
      };

    default:
      return state;
  }
};
