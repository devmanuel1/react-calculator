import React from "react";
import "./Button.css";

function Button({value, handler}) {
  return (
    <div className={value == "C" || value == "=" ? `calcbtns calcbtnsdouble` : `calcbtns` } onClick={()=> handler(value)}>
      {value}
    </div>
  )
}

export default Button;
