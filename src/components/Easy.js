import React from "react";
import Cards from "./Cards";

const Easy = ({eleArr}) => {
  
  return (
    <>
      <div>
        <Cards val={eleArr[0]} />
        <Cards val={eleArr[1]}/>
        <Cards val={eleArr[2]}/>
        <Cards val={eleArr[3]}/>
      </div>
      <div>
        <Cards val={eleArr[4]}/>
        <Cards val={eleArr[5]}/>
        <Cards val={eleArr[6]}/>
        <Cards val={eleArr[7]}/>
      </div>
      <div>
        <Cards val={eleArr[8]}/>
        <Cards val={eleArr[9]}/>
        <Cards val={eleArr[10]}/>
        <Cards val={eleArr[11]}/>
      </div>
    </>
  );
};

export default Easy;
