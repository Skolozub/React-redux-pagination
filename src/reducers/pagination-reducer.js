import { PAGINATION_SET_PARAMS } from "../actions/constants";

const initialState = {};

export const paginationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGINATION_SET_PARAMS: {
      return {
        ...state,
        [payload.paginationName]: { params: payload.params }
      };
    }

    default: {
      return state;
    }
  }
};
