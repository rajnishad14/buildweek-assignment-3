import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import "./easy.css"

const Easy = ({ eleArr }) => {
  let store = [];
  const [c, setC] = useState(0);
  const [moves, setMoves] = useState(0);
  const hadleClick = (e) => {
    e.target.className = "clicked"
    store.push(e.target);
    if (store.length === 2) {
      if (store[0].innerHTML !== store[1].innerHTML) {
        setTimeout(() => {
          store[0].className = "cell";
          store[1].className = "cell";
          store = [];
        }, 300);
      } else {
        setC(c + 1);
        store = [];
      }
    }
  }
  useEffect(() => {
    if (c === eleArr.length / 2) {
      alert("You won the game 🎉✨🎊");
    }
  },
    // eslint-disable-next-line 
    [c]);
  return (
    <div className="grid-container container">
      {
        eleArr.map((ele, key) => {
          return (
            <Cards hadleClick={hadleClick} key={key} val={ele} />
          )
        })
      }
      <div>{moves}</div>
    </div>
  );
};

export default Easy;
