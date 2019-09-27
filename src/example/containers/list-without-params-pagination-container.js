import React from "react";
import { connect } from "react-redux";
import { store } from "../../constants/store";
import { registerPagination, PaginationContainer } from "../../containers";
import ListPaginationContainer from "./list-pagination-container";
import ListContainer from "./list-container";

registerPagination({ store, paginationName: "wihtoutparams" });

const ListWithoutParamsPaginationContainer = ({ params }) => (
  <PaginationContainer paginationName="wihtoutparams">
    <ListPaginationContainer params={params} />
    <ListContainer params={params} />
  </PaginationContainer>
);

const mapStateToProps = state => ({
  params: state.pagination.wihtoutparams.params
});

export default connect(mapStateToProps)(ListWithoutParamsPaginationContainer);
