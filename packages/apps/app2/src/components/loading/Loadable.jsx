import React, { Component, Suspense } from "react";
import PropTypes from "prop-types";
import Loading from "./LoadingComponent";

const lazyCache = {};

class Loadable extends Component {
  static defaultProps = {
    loadingComponent: Loading
  };

  static propTypes = {
    loader: PropTypes.oneOfType([PropTypes.func, PropTypes.instanceOf(Object)])
      .isRequired,
    loadingComponent: PropTypes.func
  };

  state = {};

  render() {
    const { loader, loadingComponent: LoadingComponent } = this.props;
    let LazyLoader = lazyCache[loader];

    if (!LazyLoader) {
      LazyLoader = React.lazy(loader);
      lazyCache[loader] = LazyLoader;
    }
    return (
      <Suspense fallback={<LoadingComponent />}>
        <LazyLoader {...this.props} />
      </Suspense>
    );
  }
}

export default Loadable;
