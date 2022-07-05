import React, { useState } from "react";
import { Cake } from "./components/Cake";
import { Candles } from "./components/Candles";
import { Wish } from "./components/Wish";
import Confetti from "react-confetti";

export const Main = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div className="container">
        {!isClicked ? (
          <>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={150}
            />
            <Cake setIsClicked={setIsClicked} />
            <Wish />
          </>
        ) : (
          <Candles setIsClicked={setIsClicked} />
        )}
      </div>
    </>
  );
};
