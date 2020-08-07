import React, { useState } from "react";

const Categories = React.memo((props) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
    props.onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ""}
          onClick={() => {
            setActiveItem(null);
          }}
        >
          Все
        </li>
        {props.items &&
          props.items.map((item, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => {
                onSelectItem(index);
              }}
              key={index}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
