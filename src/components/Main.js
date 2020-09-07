import React from "react";

import Profiles from "./Profiles";
import Carousel from "./Carousel";
import Services from "./Services";
import Articles from "./Articles";

const Main = (props) => {
  return (
    <div className="container">
      <Profiles />
      <Carousel />
      <Services />
      <Articles />
    </div>
  );
};

export default Main;
