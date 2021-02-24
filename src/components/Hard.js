import React from 'react';
import Cards from "./Cards";

const Hard = ({eleArr}) => {
    return (
      <>
      <div>
        <Cards val={eleArr[0]}/>
        <Cards val={eleArr[1]}/>
        <Cards val={eleArr[2]}/>
        <Cards val={eleArr[3]}/>
        <Cards val={eleArr[4]}/>
        <Cards val={eleArr[5]}/>
      </div>
      <div>
        <Cards val={eleArr[6]}/>
        <Cards val={eleArr[7]}/>
        <Cards val={eleArr[8]}/>
        <Cards val={eleArr[9]}/>
        <Cards val={eleArr[10]}/>
        <Cards val={eleArr[11]}/>
      </div>
      <div>
        <Cards val={eleArr[12]}/>
        <Cards val={eleArr[13]}/>
        <Cards val={eleArr[14]}/>
        <Cards val={eleArr[15]}/>
        <Cards val={eleArr[16]}/>
        <Cards val={eleArr[17]}/>
      </div>
      <div>
        <Cards val={eleArr[18]}/>
        <Cards val={eleArr[19]}/>
        <Cards val={eleArr[20]}/>
        <Cards val={eleArr[21]}/>
        <Cards val={eleArr[22]}/>
        <Cards val={eleArr[23]}/>
      </div>
    </>
    );
};

export default Hard;