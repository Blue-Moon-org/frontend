import { actionTypesFeeds } from "../../constants/PostTypes";

const initialState = {
  dataAll: [],
  dataWomen: [],
  dataMen: [],
  dataAnkara: [],
  dataNative: [],
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
      };
    case actionTypesFeeds.FETCH_FEEDS_MORE_LOADING:
      return {
        ...state,
        loading: false,
        moreError: false,
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
