import {
  PAGINATION_REGISTERED,
  PAGINATION_SET_PARAMS,
  PAGINATION_DEL_PARAMS
} from "./constants";

export const registerPag = payload => ({
  type: PAGINATION_REGISTERED,
  payload: {
    paginationName: payload.paginationName,
    options: payload.options
  }
});

export const setParams = payload => ({
  type: PAGINATION_SET_PARAMS,
  payload: {
    paginationName: payload.paginationName,
    params: payload.params
  }
});

export const deleteParams = payload => ({
  type: PAGINATION_DEL_PARAMS,
  payload: {
    paginationName: payload.paginationName
  }
});
