import React from "react";

export const Cake = ({ setIsClicked }) => {
  return (
    <div className="birthday-card">
      <div
        className="card"
        onClick={() => setIsClicked(true)}
        title="нажми на меня"
      >
        <div className="cake">
          <div className="cake-bottom"></div>
          <div className="cake-middle"></div>
          <div className="cake-top"></div>
          <div className="candle"></div>
          <div className="flame"></div>
          <div className="shadow"></div>
        </div>

        <h4 className="bttn">нажми на меня</h4>
      </div>
    </div>
  );
};
