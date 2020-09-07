import React, { useState } from "react";

import Button from "./Button";

const Navbar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  console.log(props);

  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <nav className="navbar navbar-expand-lg navbar-light py-3">
      <div className="container">
        <Button className="brand-text-icon" href="/" type="link">
          Company Name
        </Button>
        <button
          onClick={toggleNavbar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`${classOne} justify-content-end`}
          id="navbarResponsive"
        >
          <ul className="navbar-nav">
            <li className={`nav-item${getNavLinkClass("/")}`}>
              <Button className="nav-link" type="link" href="/">
                Home
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/about")}`}>
              <Button className="nav-link" type="link" href="/about">
                About
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/services")}`}>
              <Button className="nav-link" type="link" href="/services">
                Services
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/portfolio")}`}>
              <Button className="nav-link" type="link" href="/portfolio">
                Portfolio
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/articles")}`}>
              <Button className="nav-link" type="link" href="/articles">
                Articles
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
