import React from "react";

import serviceImage from "../assets/service.png";

const Services = () => {
  const data = [
    {
      id: 1,
      head: "Service one",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eaque explicabo sed.",
    },
    {
      id: 2,
      head: "Service two",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eaque.",
    },
    {
      id: 1,
      head: "Service three",
      body:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati eaque explicabo.",
    },
  ];

  return (
    <div className="services mb-5">
      <h3 className="mb-4">SERVICES</h3>
      <div className="row">
        <div className="col-6 col-md-4">
          {data.map((item) => {
            return (
              <div key={item.id} className="mb-3">
                <h5>{item.head}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
        <div className="col-6 col-md-4">
          {data.map((item) => {
            return (
              <div key={item.id} className="mb-3">
                <h5>{item.head}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
        <div className="col-md-4 mt-4">
          <img src={serviceImage} alt="service" />
        </div>
      </div>
    </div>
  );
};

export default Services;
