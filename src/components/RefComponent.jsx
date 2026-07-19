import { useEffect, useRef } from "react";

function RefComponent() {
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, []);

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
