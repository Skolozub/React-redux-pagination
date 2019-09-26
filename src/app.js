import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { Menu } from "./components/organisms/menu";
import ListWithParamsPaginationContainer from "./example/containers/list-with-params-pagination-container";
import ListWithoutParamsPaginationContainer from "./example/containers/list-without-params-pagination-container";
import { Documentation } from "./components/organisms/documentation";

axios.defaults.baseURL = "https://swapi.co/api";

export const App = () => (
  <Menu>
    <Switch>
      <Route exact path="/" component={Documentation} />
      <Route path="/params" component={ListWithParamsPaginationContainer} />
      <Route
        path="/only-page-param"
        component={ListWithoutParamsPaginationContainer}
      />
    </Switch>
  </Menu>
);
