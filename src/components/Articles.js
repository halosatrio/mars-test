import React from "react";

const Articles = () => {
  const articleData = [
    {
      id: 1,
      image: "/images/article1.png",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sequi doloribus enim voluptas perspiciatis ratione?",
    },
    {
      id: 2,
      image: "/images/article2.png",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem sequi doloribus enim voluptas.",
    },
    {
      id: 1,
      image: "/images/article3.png",
      content:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, officia architecto!",
    },
  ];

  return (
    <div className="articles mb-5">
      <h3 className="mb-4">ARTICLES</h3>
      <div className="row justify-content-center">
        {articleData.map((item) => {
          return (
            <div key={item.id} className="col-sm-4">
              <img src={item.image} alt={item.id} />
              <p className="mt-3">{item.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
