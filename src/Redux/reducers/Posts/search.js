import {
  actionTypesLatestSearch,
  actionTypesPeoleSearch,
  actionTypesPostSearch,
  actionTypesProductSearch,
} from "../../constants/search";

const initialState = {
  dataProduct: [],
  dataPost: [],
  dataPeople: [],
  dataLatest: [],
  loadingProduct: false,
  loadingPost: false,
  loadingPeople: false,
  loadingLatest: false,
  loadingMoreProduct: false,
  loadingMorePost: false,
  loadingMorePeople: false,
  loadingMoreLatest: false,
  errorProduct: "",
  errorPost: "",
  errorPeople: "",
  errorLatest: "",
  errorMoreProduct: "",
  errorMorePost: "",
  errorMorePeople: "",
  errorMoreLatest: "",
  isListEndProduct: null,
  isListEndPost: null,
  isListEndPeople: null,
  isListEndLatest: null,
};

export const productSearchReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesProductSearch.PRODUCT_SEARCH_LOADING:
      return {
        ...state,
        loadingProduct: true,
        dataProduct: [],
        loadingMoreProduct: false,
        errorProduct: "",
        isListEndProduct: null,
        errorMoreProduct: "",
      };
    case actionTypesProductSearch.PRODUCT_SEARCH_MORE_LOADING:
      return {
        ...state,
        loadingProduct: false,
        loadingMoreProduct: true,
        errorProduct: "",
        isListEndProduct: null,
        errorMoreProduct: "",
      };

    case actionTypesProductSearch.PRODUCT_SEARCH_SUCCESS:
      return {
        ...state,
        loadingProduct: false,
        dataProduct: payload,
        loadingMoreProduct: true,
        errorProduct: "",
        errorMoreProduct: "",
        isListEndProduct: isListEnd,
      };
    case actionTypesProductSearch.PRODUCT_SEARCH_ERROR:
      return {
        ...state,
        loadingProduct: false,
        dataProduct: [],
        loadingMoreProduct: true,
        errorProduct: "",
        isListEndProduct: error,
        errorMoreProduct: "",
      };
    case actionTypesProductSearch.PRODUCT_SEARCH_MORE_ERROR:
      return {
        ...state,
        loadingProduct: false,
        loadingMoreProduct: true,
        errorProduct: "",
        isListEndProduct: null,
        errorMoreProduct: error,
      };

    default:
      return state;
  }
};

export const latestSearchReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesLatestSearch.LATEST_SEARCH_LOADING:
      return {
        ...state,
        loadingLatest: true,
        dataLatest: [],
        loadingMoreLatest: false,
        errorLatest: "",
        isListEndLatest: null,
        errorMoreLatest: "",
      };
    case actionTypesLatestSearch.LATEST_SEARCH_MORE_LOADING:
      return {
        ...state,
        loadingLatest: false,
        loadingMoreLatest: true,
        errorLatest: "",
        isListEndLatest: null,
        errorMoreLatest: "",
      };

    case actionTypesLatestSearch.LATEST_SEARCH_SUCCESS:
      return {
        ...state,
        loadingLatest: false,
        dataLatest: payload,
        loadingMoreLatest: true,
        errorLatest: "",
        errorMoreLatest: "",
        isListEndLatest: isListEnd,
      };
    case actionTypesLatestSearch.LATEST_SEARCH_ERROR:
      return {
        ...state,
        loadingMoreLatest: false,
        dataLatest: [],
        loadingLatest: true,
        errorLatest: "",
        isListEndLatest: error,
        errorMoreLatest: "",
      };
    case actionTypesLatestSearch.LATEST_SEARCH_MORE_ERROR:
      return {
        ...state,
        loadingMoreLatest: false,
        loadingLatest: false,
        errorLatest: "",
        isListEndLatest: null,
        errorMoreLatest: error,
      };

    default:
      return state;
  }
};

export const peopleSearchReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesPeoleSearch.PEOPLE_SEARCH_LOADING:
      return {
        ...state,
        loadingMorePeople: false,
        dataPeople: [],
        loadingPeople: true,
        errorPeople: "",
        isListEndPeople: null,
        errorMorePeople: "",
      };
    case actionTypesPeoleSearch.PEOPLE_SEARCH_MORE_LOADING:
      return {
        ...state,
        loadingMorePeople: true,
        loadingPeople: false,
        errorPeople: "",
        isListEndPeople: null,
        errorMorePeople: "",
      };

    case actionTypesPeoleSearch.PEOPLE_SEARCH_SUCCESS:
      return {
        ...state,
        loadingMorePeople: false,
        dataPeople: payload,
        loadingPeople: false,
        errorPeople: "",
        errorMorePeople: "",
        isListEndPeople: isListEnd,
      };

    case actionTypesPeoleSearch.PEOPLE_SEARCH_ERROR:
      return {
        ...state,
        loadingMorePeople: false,
        dataPeople: [],
        loadingPeople: false,
        errorPeople: "",
        isListEndPeople: error,
        errorMorePeople: "",
      };
    case actionTypesPeoleSearch.PEOPLE_SEARCH_MORE_ERROR:
      return {
        ...state,
        loadingMorePeople: false,
        loadingPeople: false,
        errorPeople: "",
        isListEndPeople: null,
        errorMorePeople: error,
      };

    default:
      return state;
  }
};

export const postSearchReducer = (
  state = initialState,
  { type, payload, error, isListEnd }
) => {
  switch (type) {
    case actionTypesPostSearch.POST_SEARCH_LOADING:
      return {
        ...state,
        loadingMorePost: false,
        dataPost: [],
        loadingPost: true,
        errorPost: "",
        isListEndPost: null,
        errorMorePost: "",
      };
    case actionTypesPostSearch.POST_SEARCH_MORE_LOADING:
      return {
        ...state,
        loadingMorePost: true,
        loadingPost: false,
        errorPost: "",
        isListEndPost: null,
        errorMorePost: "",
      };

    case actionTypesPostSearch.POST_SEARCH_SUCCESS:
      return {
        ...state,
        loadingMorePost: false,
        dataPost: payload,
        loadingPost: false,
        errorPost: "",
        errorMorePost: "",
        isListEndPost: isListEnd,
      };
    case actionTypesPostSearch.POST_SEARCH_ERROR:
      return {
        ...state,
        loadingMorePost: false,
        dataPost: [],
        loadingPost: false,
        errorPost: "",
        isListEndPost: error,
        errorMorePost: "",
      };
    case actionTypesPostSearch.POST_SEARCH_MORE_ERROR:
      return {
        ...state,
        loadingMorePost: false,
        loadingPost: false,
        errorPost: "",
        isListEndPost: null,
        errorMorePost: error,
      };

    default:
      return state;
  }
};
