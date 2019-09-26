import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { List } from "../components/organizms/list";

class ListContainer extends Component {
  // -----------------Methods-------------------

  fetchList = async params => axios.get("/people", { params });

  loadData = async params => {
    this.setState({ isLoading: true });
    const { data } = await this.fetchList(params);
    this.setState({ list: data.results, isLoading: false });
  };

  // ----------------Lifecycle------------------

  componentDidUpdate = prevProps => {
    const { pagination, pagName } = this.props;

    if (prevProps.pagination[pagName] !== pagination[pagName])
      this.loadData(pagination[pagName].params);
  };

  state = {
    list: [],
    isLoading: false
  };

  render = () => (
    <List list={this.state.list} isLoading={this.state.isLoading} />
  );
}

const mapStateToProps = state => ({
  pagination: state.pagination,
  state
});

export default connect(mapStateToProps)(ListContainer);
