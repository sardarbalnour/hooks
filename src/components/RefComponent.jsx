import { useRef } from "react";

function RefComponent() {
  const num = useRef(0);

  console.log("render");

  const clickHandler = () => {
    num.current++;
    console.log(num)
  };

  return (
    <div>
      RefComponent
      <button onClick={clickHandler}>+</button>
    </div>
  );
}

export default RefComponent;
