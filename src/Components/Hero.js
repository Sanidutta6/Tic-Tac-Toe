import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icons from "./Icons";
import ThemeContext from "../Context/ThemeContext";
import ThemeColor from "../Colors"


const array = new Array(9).fill("empty");

const Hero = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = ThemeColor[theme];

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    array.fill("empty", 0, 9);
  };

  const checkWinner = () => {
    if (
      array[0] === array[1] &&
      array[0] === array[2] &&
      array[0] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else if (
      array[3] === array[4] &&
      array[3] === array[5] &&
      array[3] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else if (
      array[6] === array[7] &&
      array[6] === array[8] &&
      array[6] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else if (
      array[0] === array[4] &&
      array[0] === array[8] &&
      array[0] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else if (
      array[2] === array[4] &&
      array[2] === array[6] &&
      array[2] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else if (
      array[0] === array[3] &&
      array[0] === array[6] &&
      array[0] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else if (
      array[1] === array[4] &&
      array[1] === array[7] &&
      array[1] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else if (
      array[2] === array[5] &&
      array[2] === array[8] &&
      array[2] !== "empty"
    ) {
      setWinMessage(`${isCross ? "Cross" : "Circle"} is Winner!`);
    } else {
      // For draw game
      if (!array.includes("empty")) {
        setWinMessage("Draw Game");
      }
    }
  };

  const changeItem = (ItemNumber) => {
    if (winMessage) {
      return toast.success(winMessage);
    }

    if (array[ItemNumber] !== "empty") {
      return toast.warn("Already Clicked On it");
    }

    array[ItemNumber] = isCross ? "cross" : "circle";
    setIsCross(!isCross);
    console.log(array);

    checkWinner();
  };

  return (
    <div className="w-full">
      <ToastContainer position="top-right" closeOnClick />
      <div className="mt-8 w-full text-center">
        {winMessage ? (
          <button
            className={`${currentTheme.border} ${currentTheme.color} text-2xl py-2 px-12 mb-6 rounded-lg cursor-pointer`}
            onClick={reloadGame}
          >
            Reload
          </button>
        ) : (
          <h1 className="text-5xl text-center mb-6">
            {isCross ? "Cross" : "Circle"}
          </h1>
        )}

        <div className="grid grid-cols-3 gap-4 w-1/4 m-auto">
          {array.map((item, index) => (
            <div
              key={index}
              className={`${currentTheme.border} rounded-lg py-4 flex cursor-pointer items-center justify-center text-xl font-semibold`}
              onClick={() => changeItem(index)}
            >
              <Icons name={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
