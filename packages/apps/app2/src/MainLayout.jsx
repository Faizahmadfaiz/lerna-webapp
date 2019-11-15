import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import history from "./routing/history";
import Loadable from "./components/loading/Loadable";
// Constants
import { routePaths as ROUTE_PATHS } from "./constants/routeNames";
import routes from "./routing/routes";


class MainLayout extends Component {

  getRoutes = () => {
    return Object.getOwnPropertyNames(routes).map(ROUTE_NAME => {
      const routeConfig = routes[ROUTE_NAME];
      return (
        <Route
          path={ROUTE_PATHS[ROUTE_NAME]}
          key={ROUTE_NAME}
          render={
            /* istanbul ignore next */
            props => this.renderRoute(routeConfig, props)
          }
        />
      );
    });
  };

  renderRoute = (routeConfig = {}, props = {}) => {
    return <Loadable loader={routeConfig.loader} {...props} />;
  };

  render() {
    return (
      <div>
        <Router history={history()}>
          <Switch>
            <Redirect from="/" exact to={ROUTE_PATHS.HOME} />
            {this.getRoutes()}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default MainLayout;
