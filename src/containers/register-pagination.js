import { setParams } from "../actions/pagination-actions";

export const registerPagination = ({
  store,
  paginationName,
  paramName = "page",
  withparams = false
}) => {
  store.dispatch(
    setParams({
      paginationName,
      params: {},
      options: { paramName, withparams }
    })
  );
};
