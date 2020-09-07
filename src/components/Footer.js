import React from "react";

import Button from "./Button";

import { InstagramIcon, TwitterIcon, FacebookIcon } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-5 col-md-auto col-lg-3 mb-4 text-center text-sm-left">
            <h2 className="text-logo mt-2 text-secondary">COMPANY</h2>
          </div>
          <div className="col-sm-4 col-md-auto col-lg-3 mb-4 text-center text-sm-left">
            <h6 className="mt-2 head-item">About Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/about">
                  Home
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  About Us
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Services
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Privacy Policy
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 col-md-auto col-lg-3  mb-4 text-center text-sm-left">
            <h6 className="mt-2 head-item">Our Company</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/">
                  Portfolio
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Articles
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/">
                  Clients
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center text-md-left">
            <h6 className="mt-2 head-item">Contact Details</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="mailto:info@company.com">
                  info@company.com
                </Button>
              </li>
              <li className="list-group-item">
                <p>Jl. Grafika No. 2, Sleman Yogyakarta 55281, Indonesia</p>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="row justify-content-between">
          <div className="col-md-auto copyrights text-center text-md-left">
            @ 2020 | built with <span>love</span> by{" "}
            <Button isExternal type="link" href="https://halosatrio.now.sh">
              Satrio Bayu Aji
            </Button>
          </div>
          <div className="col-md-auto text-center mb-4">
            <Button
              isExternal
              type="link"
              href="https://instagram.com"
              className="mr-5"
            >
              <InstagramIcon width={"30px"} />
            </Button>
            <Button
              isExternal
              type="link"
              href="https://twitter.com"
              className="mr-5"
            >
              <TwitterIcon width={"30px"} />
            </Button>
            <Button isExternal type="link" href="https://facebook.com">
              <FacebookIcon width={"30px"} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
