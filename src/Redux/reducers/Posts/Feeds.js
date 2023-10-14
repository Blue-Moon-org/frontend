import {
  actionTypesFeeds,
  actionTypesFeedsAnkara,
  actionTypesFeedsMen,
  actionTypesFeedsNative,
  actionTypesFeedsWomen,
} from "../../constants/PostTypes";
import { actionTypesAddFavorite } from "../../constants/PostTypes";

const initialState = {
  //all
  dataAll: [],
  moreLoadingAll: false,
  isListEndAll: "",
  moreErrorAll: false,
  errorAll: "",
  loadingAll: false,

  //men
  dataMen: [],
  moreLoadingMen: false,
  isListEndMen: "",
  moreErrorMen: false,
  errorMen: "",
  loadingMen: false,

  //women
  dataWomen: [],
  moreLoadingWomen: false,
  isListEndWomen: "",
  moreErrorWomen: false,
  errorWomen: "",
  loadingWomen: false,

  //native
  dataNative: [],
  moreLoadingNative: false,
  isListEndNative: "",
  moreErrorNative: false,
  errorNative: "",
  loadingNative: false,

  //Ankara
  dataAnkara: [],
  moreLoadingAnkara: false,
  isListEndAnkara: "",
  moreErrorAnkara: false,
  errorAnkara: "",
  loadingAnkara: false,

  // Favs
  dataFav: {},
  errorFav: "",
  loadingFav: false,
};

export const fetchFeedsReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesFeeds.FETCH_FEEDS_LOADING:
      return {
        ...state,
        dataAll: [],
        moreLoadingAll: false,
        isListEndAll: "",
        moreErrorAll: false,
        errorAll: "",
        loadingAll: true,
      };
    case actionTypesFeeds.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        dataAll: [
          ...state.dataAll,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        moreLoadingAll: false,
        isListEndAll: isListEnd,
        moreErrorAll: false,
        errorAll: "",
        loadingAll: false,
      };
    case actionTypesFeeds.FETCH_FEEDS_MORE_LOADING:
      return {
        ...state,
        moreLoadingAll: true,
        isListEndAll: "",
        moreErrorAll: false,
        errorAll: "",
        loadingAll: false,
      };

    case actionTypesFeeds.FETCH_FEEDS_ERROR:
      return {
        ...state,
        dataAll: [],
        moreLoadingAll: false,
        isListEndAll: null,
        moreErrorAll: false,
        errorAll: error,
        loadingAll: false,
      };
    case actionTypesFeeds.FETCH_FEEDS_MORE_ERROR:
      return {
        ...state,
        moreLoadingAll: false,
        isListEndAll: null,
        moreErrorAll: error,
        errorAll: "",
        loadingAll: false,
      };

    default:
      return state;
  }
};

export const fetchFeedsMenReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesFeedsMen.FETCH_FEEDS_LOADING_MEN:
      return {
        ...state,
        dataMen: [],
        moreLoadingMen: false,
        isListEndMen: "",
        moreErrorMen: false,
        errorMen: "",
        loadingMen: true,
      };

    case actionTypesFeedsMen.FETCH_FEEDS_MORE_LOADING_MEN:
      return {
        ...state,
        moreLoadingMen: true,
        isListEndMen: "",
        moreErrorMen: false,
        errorMen: "",
        loadingMen: false,
      };

    case actionTypesFeedsMen.FETCH_FEEDS_SUCCESS_MEN:
      return {
        ...state,
        dataMen: [
          ...state.dataMen,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        moreLoadingMen: false,
        isListEndMen: isListEnd,
        moreErrorMen: false,
        errorMen: "",
        loadingMen: false,
      };

    case actionTypesFeedsMen.FETCH_FEEDS_ERROR_MEN:
      return {
        ...state,
        dataMen: [],
        moreLoadingMen: false,
        isListEndMen: "",
        moreErrorMen: false,
        errorMen: error,
        loadingMen: false,
      };

    case actionTypesFeedsMen.FETCH_FEEDS_MORE_ERROR_MEN:
      return {
        ...state,
        moreLoadingMen: false,
        isListEndMen: "",
        moreErrorMen: false,
        errorMen: error,
        loadingMen: false,
      };

    default:
      return state;
  }
};

export const fetchFeedsWomenReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesFeedsWomen.FETCH_FEEDS_LOADING_WOMEN:
      return {
        ...state,
        dataWomen: [],
        moreLoadingWomen: false,
        isListEndWomen: "",
        moreErrorWomen: false,
        errorWomen: "",
        loadingWomen: true,
      };
    case actionTypesFeedsWomen.FETCH_FEEDS_MORE_LOADING_WOMEN:
      return {
        ...state,
        moreLoadingWomen: true,
        isListEndWomen: "",
        moreErrorWomen: false,
        errorWomen: "",
        loadingWomen: false,
      };

    case actionTypesFeedsWomen.FETCH_FEEDS_SUCCESS_WOMEN:
      return {
        ...state,
        dataWomen: [
          ...state.dataWomen,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        moreLoadingWomen: false,
        isListEndWomen: isListEnd,
        moreErrorWomen: false,
        errorWomen: "",
        loadingWomen: false,
      };

    case actionTypesFeedsWomen.FETCH_FEEDS_ERROR_WOMEN:
      return {
        ...state,
        dataWomen: [],
        moreLoadingWomen: false,
        isListEndWomen: "",
        moreErrorWomen: false,
        errorWomen: error,
        loadingWomen: false,
      };

    case actionTypesFeedsWomen.FETCH_FEEDS_MORE_ERROR_WOMEN:
      return {
        ...state,
        moreLoadingWomen: false,
        isListEndWomen: "",
        moreErrorWomen: false,
        errorWomen: error,
        loadingWomen: false,
      };

    default:
      return state;
  }
};

export const fetchFeedsNativeReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesFeedsNative.FETCH_FEEDS_LOADING_NATIVE:
      return {
        ...state,
        dataNative: [],
        moreLoadingNative: false,
        isListEndNative: "",
        moreErrorNative: false,
        errorNative: "",
        loadingNative: true,
      };
    case actionTypesFeedsNative.FETCH_FEEDS_MORE_LOADING_NATIVE:
      return {
        ...state,
        moreLoadingNative: true,
        isListEndNative: "",
        moreErrorNative: false,
        errorNative: "",
        loadingNative: false,
      };

    case actionTypesFeedsNative.FETCH_FEEDS_SUCCESS_NATIVE:
      return {
        ...state,
        dataNative: [
          ...state.dataNative,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        moreLoadingNative: false,
        isListEndNative: isListEnd,
        moreErrorNative: false,
        errorNative: "",
        loadingNative: false,
      };

    case actionTypesFeedsNative.FETCH_FEEDS_ERROR_NATIVE:
      return {
        ...state,
        dataNative: [],
        moreLoadingNative: false,
        isListEndNative: "",
        moreErrorNative: false,
        errorNative: error,
        loadingNative: false,
      };

    case actionTypesFeedsNative.FETCH_FEEDS_MORE_ERROR_NATIVE:
      return {
        ...state,
        moreLoadingNative: false,
        isListEndNative: "",
        moreErrorNative: false,
        errorNative: error,
        loadingNative: false,
      };

    default:
      return state;
  }
};

export const fetchFeedsAnkaraReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesFeedsAnkara.FETCH_FEEDS_LOADING_ANKARA:
      return {
        ...state,
        dataAnkara: [],
        moreLoadingAnkara: false,
        isListEndAnkara: "",
        moreErrorAnkara: false,
        errorAnkara: "",
        loadingAnkara: true,
      };
    case actionTypesFeedsAnkara.FETCH_FEEDS_MORE_LOADING_ANKARA:
      return {
        ...state,
        moreLoadingAnkara: true,
        isListEndAnkara: "",
        moreErrorAnkara: false,
        errorAnkara: "",
        loadingAnkara: false,
      };

    case actionTypesFeedsAnkara.FETCH_FEEDS_SUCCESS_ANKARA:
      return {
        ...state,
        dataAnkara: [
          ...state.dataAnkara,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        moreLoadingAnkara: false,
        isListEndAnkara: isListEnd,
        moreErrorAnkara: false,
        errorAnkara: "",
        loadingAnkara: false,
      };

    case actionTypesFeedsAnkara.FETCH_FEEDS_ERROR_ANKARA:
      return {
        ...state,
        dataAnkara: [],
        moreLoadingAnkara: false,
        isListEndAnkara: "",
        moreErrorAnkara: false,
        errorAnkara: error,
        loadingAnkara: false,
      };

    case actionTypesFeedsAnkara.FETCH_FEEDS_MORE_ERROR_ANKARA:
      return {
        ...state,
        moreLoadingAnkara: false,
        isListEndAnkara: "",
        moreErrorAnkara: false,
        errorAnkara: error,
        loadingAnkara: false,
      };

    default:
      return state;
  }
};

export const favoritePostReducer = (
  state = initialState,
  { type, payload, error, id, data }
) => {
  switch (type) {
    case actionTypesAddFavorite.ADD_FAVOURITE_LOADING:
      return {
        ...state,
        dataFav: null,
        loadingFav: true,
        errorFav: "",
      };

    case actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_ALL:
      const updatedAllPosts = data.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            favs: post.user_has_favorited ? post.favs - 1 : post.favs + 1,
            user_has_favorited: !post.user_has_favorited,
          };
        }
      });
      console.warn(state.dataAll);
      return {
        ...state,
        dataAll: updatedAllPosts,
      };
    case actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_MEN:
      const updatedMenPosts = state.dataMen.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            favs: post.user_has_favorited ? post.favs + 1 : post.favs + 0,
            user_has_favorited: !post.user_has_favorited,
          };
        }
        return post;
      });
      return {
        ...state,
        // dataAll: updatedMenPosts,
      };

    case actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_WOMEN:
      const updatedWomenPosts = state.dataWomen.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            favs: post.user_has_favorited ? post.favs + 1 : post.favs + 0,
            user_has_favorited: !post.user_has_favorited,
          };
        }
        return post;
      });
      return {
        ...state,
        // dataAll: updatedWomenPosts,
      };

    case actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_NATIVE:
      const updatedNativePosts = state.dataNative.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            favs: post.user_has_favorited ? post.favs + 1 : post.favs + 0,
            user_has_favorited: !post.user_has_favorited,
          };
        }
        return post;
      });
      return {
        ...state,
        // dataAll: updatedNativePosts,
      };

    case actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_ANKARA:
      // const updatedAnkaraPosts = state.dataAnkara.map((post) => {
      //   if (post.id === id) {
      //     return {
      //       ...post,
      //       favs: post.user_has_favorited ? post.favs + 1 : post.favs + 0,
      //       user_has_favorited: !post.user_has_favorited,
      //     };
      //   }
      //   return post;
      // });
      return {
        ...state,
        dataFav: payload,
        loadingFav: false,
        errorFav: "",
      };

    case actionTypesAddFavorite.ADD_FAVOURITE_SUCCESS:
      return {
        ...state,
        dataFav: payload,
        loadingFav: false,
        errorFav: "",
      };

    case actionTypesAddFavorite.ADD_FAVOURITE_ERROR:
      return {
        ...state,
        dataFav: null,
        loadingFav: false,
        errorFav: error,
      };

    default:
      return state;
  }
};
