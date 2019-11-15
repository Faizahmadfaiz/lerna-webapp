import React from "react";
import { PageLoader } from "di-components";

const LoadingComponent = () => {
  const message = "Loading";

  return <div><PageLoader /></div>;
};

export default LoadingComponent;
