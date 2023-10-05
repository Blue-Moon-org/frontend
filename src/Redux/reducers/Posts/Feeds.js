import { actionTypesFeeds } from "../../constants/PostTypes";
import { actionTypesAddFavorite } from "../../constants/PostTypes";

const initialState = {
  dataAll: [],
  dataWomen: [],
  dataMen: [],
  dataAnkara: [],
  dataNative: [],
  data: [],
  error: "",
  loading: false,
  moreLoadingAll: false,
  moreLoadingMen: false,
  moreLoadingWomen: false,
  moreLoadingNative: false,
  moreLoadingAnkara: false,
  isListEndAll: "",
  isListEndMen: "",
  isListEndWomen: "",
  isListEndNative: "",
  isListEndAnkara: "",
  moreError: false,
  category: "All",

  // Favs
  dataFav: {},
  errorFav: "",
  loadingFav: false,
};

export const fetchFeedsReducer = (
  state = initialState,
  { type, payload, error, category, isListEnd }
) => {
  switch (type) {
    case actionTypesFeeds.FETCH_FEEDS_CATEGORY:
      return {
        ...state,
        category,
      };
    case actionTypesFeeds.FETCH_FEEDS_LOADING:
      return {
        ...state,
        loading: true,
        moreLoadingAll: false,
        moreLoadingMen: false,
        moreLoadingWomen: false,
        moreLoadingAnkara: false,
        moreLoadingNative: false,
        dataAll: [],
        dataWomen: [],
        dataMen: [],
        dataAnkara: [],
        dataNative: [],
        data: [],
      };
    case actionTypesFeeds.FETCH_FEEDS_MORE_LOADING:
      return {
        ...state,
        loading: false,
        moreError: "",
        moreLoadingAll: true,
        moreLoadingMen: true,
        moreLoadingWomen: true,
        moreLoadingAnkara: true,
        moreLoadingNative: true,
      };

    case actionTypesFeeds.FETCH_FEEDS_SUCCESS:
      return {
        ...state,
        dataAll: [
          ...state.dataAll,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        loading: false,
        error: "",
        moreLoadingAll: false,
        moreError: false,
        isListEndAll: isListEnd,
        data: payload.response?.data?.data.categoryData.posts,
      };
    case actionTypesFeeds.FETCH_FEEDS_SUCCESS_MEN:
      return {
        ...state,
        dataMen: [
          ...state.dataMen,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        loading: false,
        error: "",
        moreLoadingMen: false,
        moreError: false,
        isListEndMen: isListEnd,
        data: payload.response?.data?.data.categoryData.posts,
      };
    case actionTypesFeeds.FETCH_FEEDS_SUCCESS_WOMEN:
      return {
        ...state,
        dataWomen: [
          ...state.dataWomen,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        loading: false,
        error: "",
        moreLoadingWomen: false,
        moreError: false,
        isListEndWomen: isListEnd,
        data: payload.response?.data?.data.categoryData.posts,
      };

    case actionTypesFeeds.FETCH_FEEDS_SUCCESS_ANKARA:
      return {
        ...state,
        dataAnkara: [
          ...state.dataAnkara,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        loading: false,
        error: "",
        moreLoadingAnkara: false,
        moreError: false,
        isListEndAnkara: isListEnd,
        data: payload.response?.data?.data.categoryData.posts,
      };
    case actionTypesFeeds.FETCH_FEEDS_SUCCESS_NATIVE:
      return {
        ...state,
        dataNative: [
          ...state.dataNative,
          ...payload.response?.data?.data.categoryData.posts,
        ],
        loading: false,
        error: "",
        moreLoadingNative: false,
        moreError: false,
        isListEndNative: isListEnd,
        data: payload.response?.data?.data.categoryData.posts,
      };

    case actionTypesFeeds.FETCH_FEEDS_ERROR:
      return {
        ...state,
        loading: false,
        error: error,
        dataAll: [],
        dataWomen: [],
        dataMen: [],
        dataNative: [],
        dataNative: [],
        data: [],
        moreLoadingAll: false,
        moreLoadingMen: false,
        moreLoadingWomen: false,
        moreLoadingAnkara: false,
        moreLoadingNative: false,
      };
    case actionTypesFeeds.FETCH_FEEDS_MORE_ERROR:
      return {
        ...state,
        loading: false,
        moreLoadingAll: false,
        moreLoadingMen: false,
        moreLoadingWomen: false,
        moreLoadingAnkara: false,
        moreLoadingNative: false,
        moreError: error,
      };

    case actionTypesFeeds.FETCH_FEEDS_ENDS:
      if (payload?.response?.data?.meta?.next === null) {
        return {
          ...state,
          loading: false,
          isListEndAll: isListEnd,
          isListEndMen: isListEnd,
          isListEndWomen: isListEnd,
          isListEndNative: isListEnd,
          isListEndAnkara: isListEnd,
          moreLoadingAll: false,
          moreLoadingMen: false,
          moreLoadingWomen: false,
          moreLoadingAnkara: false,
          moreLoadingNative: false,
        };
      }

    default:
      return state;
  }
};

export const favoritePostReducer = (
  state = initialState,
  { type, payload, error, id }
) => {
  // console.warn(state);

  switch (type) {
    case actionTypesAddFavorite.ADD_FAVOURITE_LOADING:
      return {
        ...state,
        dataFav: null,
        loadingFav: true,
        errorFav: "",
      };

    case actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_ALL:
      const updatedAllPosts = state.dataAll.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            favs: post.user_has_favorited ? post.favs + 1 : post.favs + 0,
            user_has_favorited: !post.user_has_favorited,
          };
        }
        return post;
      });
      // console.warn(state.dataAll);
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
        dataAll: updatedMenPosts,
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
        dataAll: updatedWomenPosts,
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
        dataAll: updatedNativePosts,
      };

    case actionTypesAddFavorite.ITEM_ADDED_TO_FAVOURITE_ANKARA:
      const updatedAnkaraPosts = state.dataAnkara.map((post) => {
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
        dataAll: updatedAnkaraPosts,
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
