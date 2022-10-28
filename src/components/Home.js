import React, {useState} from "react";
import "./Home.css";
import Button from "./Button";


function Home() {

  const [res, setRes] = useState("")
  
  const buttons = ["C", "Del", "/", "9", "8", "7", "*", "6", "5", "4", "+", "3", "2", "1", "-", ".", "0", "="];

  const findVal = () => {
    let result = Function("return " +res)();
    setRes(result.toString());
  }

  const handler = (arg) => {
    if (res === "Infinity") {
      setRes("");
      return;
    }

    if (arg == "C") {
      setRes("");
    }
    else if (arg == "=") {
      findVal()
    }
    else if (arg == "Del") {
      let n = res.length
      if (n > 0) {
        setRes(res.slice(0, n-1));
      }
    }
    else {
      setRes(res.concat(arg))
    }
  }
  
  return (
    <div className="home">
      <div className="inner">
        <div className="result">
          <div className="resbox">
            {res}
          </div>
        </div>
      <div className="btns">
       {buttons.map((ele, index) => {return <Button handler = {handler} value = {ele} key = {index} />})}
      </div>
      </div>
    </div>
  );
}

export default Home;
