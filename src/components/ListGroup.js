import React, { useState } from "react";

const ListGroup = ({ items, onItemSelect, selectedItem }) => {
  const [collapsed, setcollapsed] = useState(true);

  const toggleAccordion = () => {
    setcollapsed(!collapsed);
  };

  const classOne = collapsed ? "collapse" : "collapse show";
  const classTwo = collapsed
    ? "btn btn-block text-left collapsed"
    : "btn btn-block text-left";

  return (
    <div className="accordion d-block mb-4" id="accordionGenre">
      <div className="card bordered">
        <div className="card-header" id="headingOne">
          <button
            onClick={toggleAccordion}
            className={`h2 mb-0 ${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Auth Type: Any
          </button>
        </div>

        <div
          id="collapseOne"
          className={classOne}
          aria-labelledby="headingOne"
          data-parent="#accordionGenre"
        >
          <ul className="list-group" style={{ borderRadius: 0 }}>
            {items.map((item, index) => (
              <li
                key={index}
                className={
                  item === selectedItem
                    ? "list-group-item active"
                    : "list-group-item"
                }
                style={{ borderWidth: "1px 0 0 0" }}
                onClick={() => onItemSelect(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGroup;
