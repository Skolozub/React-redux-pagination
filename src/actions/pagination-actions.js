import { PAGINATION_SET_PARAMS, PAGINATION_DEL_PARAMS } from "./constants";

export const setParams = payload => ({
  type: PAGINATION_SET_PARAMS,
  payload: {
    paginationName: payload.paginationName,
    params: payload.params,
    options: payload.options
  }
});

export const deleteParams = payload => ({
  type: PAGINATION_DEL_PARAMS,
  payload: {
    paginationName: payload.paginationName
  }
});
