import { PAGINATION_SET_PARAMS } from "./constants";

export const setParams = payload => ({
  type: PAGINATION_SET_PARAMS,
  payload: {
    paginationName: payload.paginationName,
    params: payload.params
  }
});
