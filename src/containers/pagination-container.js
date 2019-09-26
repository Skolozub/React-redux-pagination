import { Component } from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { setParams } from "../actions/pagination-actions";

class PaginationContainer extends Component {
  // -----------------Methods-------------------

  parseURLParamsAndAddPage = () => {
    const { location, paramName = "page", withparams } = this.props;
    const params = queryString.parse(location.search);

    if (withparams) return { ...params, [paramName]: params[paramName] || 1 };
    return { [paramName]: params[paramName] || 1 };
  };

  // ----------------Lifecycle------------------

  componentDidMount = () => {
    const { pagName, setParams } = this.props;
    const newParams = this.parseURLParamsAndAddPage();
    setParams({ paginationName: pagName, params: newParams });
  };

  componentDidUpdate = prevProps => {
    const { location, pagName, setParams } = this.props;

    const paramsHasChanged = prevProps.location.search !== location.search;
    if (!paramsHasChanged) return null;

    const newParams = this.parseURLParamsAndAddPage();
    setParams({ paginationName: pagName, params: newParams });
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
