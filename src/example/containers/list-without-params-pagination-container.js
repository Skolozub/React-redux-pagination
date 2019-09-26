import React from "react";
import PaginationContainer from "../../containers/pagination-container";
import ListContainer from "./list-container";
import ListPaginationContainer from "./list-pagination-container";

const ListWithoutParamsPaginationContainer = ({ params }) => (
  <PaginationContainer pagName="wihtoutparams">
    <ListPaginationContainer pagName="wihtoutparams" />
    <ListContainer pagName="wihtoutparams" />
  </PaginationContainer>
);

export default ListWithoutParamsPaginationContainer;
