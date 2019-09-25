import { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { setParams } from "../actions/pagination-actions";

class PaginationContainer extends Component {
  // -----------------Methods-------------------

  parseURLParamsAndAddPage = () => {
    const { location } = this.props;
    const params = queryString.parse(location.search);

    return { ...params, page: params.page || 1 };
  };

  // ----------------Lifecycle------------------

  componentDidMount = () => {
    const { pagName = "page", setParams } = this.props;
    const newParams = this.parseURLParamsAndAddPage();
    setParams({ pagName, newParams });
  };

  componentDidUpdate = prevProps => {
    const { location, pagName = "page", setParams } = this.props;

    const paramsHasChanged = prevProps.location.search !== location.search;
    if (!paramsHasChanged) return null;

    const newParams = this.parseURLParamsAndAddPage();
    setParams({ pagName, newParams });
  };

  render = () => this.props.children;
}

const mapStateToProps = state => ({
  location: state.router.location
});

const mapDispatchToProps = dispatch => ({
  setParams: payload => dispatch(setParams(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationContainer);
