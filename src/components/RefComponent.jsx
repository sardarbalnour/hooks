import { useEffect, useRef } from "react";
import { useTitle } from "../hooks/useTitle";

function RefComponent() {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

  useTitle("ref page");

  console.log("render");

  const clickHandler = () => {
    num.current++;
    console.log(num);
  };

  return (
    <div>
      RefComponent
      <input type="text" ref={input} />
      <button onClick={clickHandler}>+</button>
    </div>
  );
}

export default RefComponent;
