import "./counter.css";
import Button from "../Button";
import { useState } from "react";

const Counter = (props) => {
  const [number, setNumber] = useState(0);
  const onButtonClickPlus = () => {
    setNumber(number + 1);
  };
  const onButtonClickMinus = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  const onButtonClickReset = () => {
    if (number > 0) {
      setNumber(0);
    }
  };
  return (
    <div className="countermain">
      <p>Counter App</p>
      <h1>{number}</h1>
      <Button text="Increment" onClick={onButtonClickPlus} />
      <Button text="Decrement" onClick={onButtonClickMinus} />
      <Button text="Reset" onClick={onButtonClickReset} />
    </div>
  );
};
export default Counter;
