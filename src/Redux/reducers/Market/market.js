import { actionTypesMarkets } from "../../constants/Market";

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

export const fetchMarketReducer = (
  state = initialState,
  { type, payload, error, category, isListEnd }
) => {
  switch (type) {
    case actionTypesMarkets.FETCH_MARKET_CATEGORY:
      return {
        ...state,
        category,
      };
    case actionTypesMarkets.FETCH_MARKET_LOADING:
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
    case actionTypesMarkets.FETCH_MARKET_MORE_LOADING:
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

    case actionTypesMarkets.FETCH_MARKET_SUCCESS:
      return {
        ...state,
        dataAll: [
          ...state.dataAll,
          ...payload.response?.data.data.categoryData.product,
        ],
        loading: false,
        error: "",
        moreLoadingAll: false,
        moreError: false,
        isListEndAll: isListEnd,
      };
    case actionTypesMarkets.FETCH_MARKET_SUCCESS_MEN:
      return {
        ...state,
        dataMen: [
          ...state.dataMen,
          ...payload.response?.data.data.categoryData.product,
        ],
        loading: false,
        error: "",
        moreLoadingMen: false,
        moreError: false,
        isListEndMen: isListEnd,
      };
    case actionTypesMarkets.FETCH_MARKET_SUCCESS_WOMEN:
      return {
        ...state,
        dataWomen: [
          ...state.dataWomen,
            ...payload.response?.data.data.categoryData.product,
        ],
        loading: false,
        error: "",
        moreLoadingWomen: false,
        moreError: false,
        isListEndWomen: isListEnd,
      };
    case actionTypesMarkets.FETCH_MARKET_SUCCESS_ANKARA:
      return {
        ...state,
        dataAnkara: [
          ...state.dataAnkara,
            ...payload.response?.data.data.categoryData.product,
        ],
        loading: false,
        error: "",
        moreLoadingAnkara: false,
        moreError: false,
        isListEndAnkara: isListEnd,
      };
    case actionTypesMarkets.FETCH_MARKET_SUCCESS_NATIVE:
      return {
        ...state,
        dataNative: [
          ...state.dataNative,
            ...payload.response?.data.data.categoryData.product,
        ],
        loading: false,
        error: "",
        moreLoadingNative: false,
        moreError: false,
        isListEndNative: isListEnd,
      };

    case actionTypesMarkets.FETCH_MARKET_ERROR:
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
    case actionTypesMarkets.FETCH_MARKET_MORE_ERROR:
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

    case actionTypesMarkets.FETCH_MARKET_ENDS:
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
