import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Selector from "./components/Selector";
import { Button, Navbar } from "react-bootstrap";
import Easy from "./components/Easy"
import Medium from "./components/Medium";
import Hard from "./components/Hard";

function App() {
  const [level, setLevel] = useState(0);
  const [eleArr,setEleArr] = useState([]);
  const changeLevel = (val) => {
    if(val===0){
      setEleArr([])
    }else if(val===1){
      changeEleArr(6);
    }else if(val===2){
      changeEleArr(9);
    }else{
      changeEleArr(12);
    }
    setLevel(val);
  };

  const changeEleArr=(range)=>{
    const temp = [...eleArr];
    for(let i=1;i<range+1;i++){
      for(let j=0;j<2;j++){
        temp.push(i);
      }
    }
    temp.sort(() => Math.random() - 0.5);
    setEleArr(temp);
  }

  if (level === 0) {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Button onClick={()=>changeLevel(0)} variant="outline-dark">Home</Button>
        </Navbar>
        <div className="App">
          <h1>Card Memory Game</h1>
          <Selector changeLevel={changeLevel} />
        </div>
      </>
    );
  } else if (level === 1) {
    return (
      <>
        <Navbar bg="light" variant="light">
        <Button onClick={()=>changeLevel(0)} variant="outline-dark">Home</Button>
        </Navbar>
        <div className="App">
          <h1>Card Memory Game</h1>
          <Easy eleArr={eleArr} />
        </div>
      </>
    );
  } else if (level === 2) {
    return (
      <>
        <Navbar bg="light" variant="light">
        <Button onClick={()=>changeLevel(0)} variant="outline-dark">Home</Button>
        </Navbar>
        <div className="App">
          <h1>Card Memory Game</h1>
          <Medium eleArr={eleArr} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Navbar bg="light" variant="light">
        <Button onClick={()=>changeLevel(0)} variant="outline-dark">Home</Button>
        </Navbar>
        <div className="App">
          <h1>Card Memory Game</h1>
          <Hard eleArr={eleArr}/>
        </div>
      </>
    );
  }
}

export default App;
