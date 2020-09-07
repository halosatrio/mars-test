import React from "react";

import Button from "../components/Button";

const Home = () => {
  return (
    <div className="home-page container">
      <div className="row justify-content-around">
        <Button type="link" href="/wireframe1" className="btn btn-primary px-4">
          Wireframe 1
        </Button>
        <Button type="link" href="/wireframe2" className="btn btn-success px-4">
          Wireframe 2
        </Button>
      </div>
    </div>
  );
};

export default Home;
