import React from "react";
import { connect } from "react-redux";
import { store } from "../../constants/store";
import { registerPagination, PaginationContainer } from "../../containers";
import ListPaginationContainer from "./list-pagination-container";
import ListContainer from "./list-container";

registerPagination({
  store,
  paginationName: "withparams",
  paramName: "stage",
  withparams: true
});

const ListWithParamsPaginationContainer = ({ params }) => (
  <PaginationContainer paginationName="withparams">
    <ListPaginationContainer params={params} paramName="stage" />
    <ListContainer params={params} />
  </PaginationContainer>
);

const mapStateToProps = state => ({
  params: state.pagination.withparams.params
});

export default connect(mapStateToProps)(ListWithParamsPaginationContainer);
