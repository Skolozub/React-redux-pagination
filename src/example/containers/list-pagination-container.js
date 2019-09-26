import React from "react";
import { Pagination } from "../components/organizms/pagination";
import { connect } from "react-redux";

const ListPaginationContainer = ({
  count,
  location,
  pagination,
  pagName,
  paramName
}) => <Pagination {...{ count, location, pagination, pagName, paramName }} />;

const mapStateToProps = state => ({
  count: 5,
  location: state.router.location,
  pagination: state.pagination
});

export default connect(mapStateToProps)(ListPaginationContainer);
