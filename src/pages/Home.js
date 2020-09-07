import React from "react";

import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home-page container">
      <div className="row justify-content-center">
        <div className="col-auto text-center">
          <Button
            type="link"
            href="/wireframe1"
            className="btn btn-primary btn-lg px-4"
          >
            Wireframe 1
          </Button>
        </div>
        <div className="col-auto text-center">
          <Button
            type="link"
            href="/wireframe2"
            className="btn btn-success btn-lg px-4"
          >
            Wireframe 2
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
