import React, { useState } from "react";

export const WheelContent = () => {
  const places = [
    "Улыбок",
    "Смеха",
    "Благополучия",
    "Везения",
    "Процветания",
    "Свершений",
  ];

  return (
    <div className="wheel_app">
      <h1>Желаем тебе</h1>
      <Wheel items={places} />
    </div>
  );
};

const Wheel = (props) => {
  const [variant, setVariant] = useState(null);

  const selectItem = () => {
    if (variant !== null) setVariant(null);
    else {
      const selectedItem = Math.floor(Math.random() * props.items.length);
      setVariant(selectedItem);
    }
  };

  const { items } = props;

  const wheelVars = {
    "--nb-item": items.length,
    "--selected-item": variant,
  };
  const spinning = variant !== null ? "spinning" : "";

  return (
    <div className="wheel-container">
      <div
        className={`wheel ${spinning}`}
        style={wheelVars}
        onClick={selectItem}
      >
        {items.map((item, index) => (
          <div
            className="wheel-item"
            key={index}
            style={{ "--item-nb": index }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
