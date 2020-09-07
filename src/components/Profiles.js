import React from "react";

const Profiles = (props) => {
  const profileData = [
    {
      id: 1,
      name: "Elizabeth Swann",
      sentence: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/profile1.png",
    },
    {
      id: 2,
      name: "William Turner",
      sentence: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/profile2.png",
    },
    {
      id: 3,
      name: "Jack Sparrow",
      sentence: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/profile3.png",
    },
    {
      id: 4,
      name: "Hector Barbosa",
      sentence: "Lorem ipsum dolor sit amet consectetur.",
      image: "/images/profile4.png",
    },
  ];

  return (
    <div className="profiles row mb-5">
      {profileData.map((item) => {
        return (
          <div className="item col-6 col-md-3 text-center">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <h6>{item.sentence}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Profiles;
