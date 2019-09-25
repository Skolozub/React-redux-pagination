import { PAGINATION_SET_PARAMS, PAGINATION_REGISTER } from "./constants";

export const registerPagination = paginationName => ({
  type: PAGINATION_REGISTER,
  payload: {
    paginationName
  }
});

export const setParams = payload => ({
  type: PAGINATION_SET_PARAMS,
  payload: {
    paginationName: payload.paginationName,
    params: payload.params
  }
});
