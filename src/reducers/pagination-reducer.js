import {
  PAGINATION_SET_PARAMS,
  PAGINATION_DEL_PARAMS
} from "../actions/constants";

const initialState = {};

export const paginationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGINATION_SET_PARAMS: {
      return {
        ...state,
        [payload.paginationName]: {
          params: payload.params,
          options: payload.options || state[payload.paginationName].options
        }
      };
    }

    case PAGINATION_DEL_PARAMS: {
      return {
        ...state,
        [payload.paginationName]: {
          params: {},
          options: payload.options || state[payload.paginationName].options
        }
      };
    }

    default: {
      return state;
    }
  }
};
