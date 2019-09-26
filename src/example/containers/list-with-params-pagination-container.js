import React from "react";
import PaginationContainer from "../../containers/pagination-container";
import ListContainer from "./list-container";
import ListPaginationContainer from "./list-pagination-container";

const ListWithParamsPaginationContainer = () => (
  <PaginationContainer pagName="withparams" paramName="stage" withparams>
    <ListPaginationContainer pagName="withparams" paramName="stage" />
    <ListContainer pagName="withparams" />
  </PaginationContainer>
);

export default ListWithParamsPaginationContainer;
