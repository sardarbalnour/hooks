import { memo } from "react";

function ChildComponent({ num, clickHandler }) {
  console.log("child component is renderd");
  return (
    <div>
      ChildComponent
      <span>{num}</span>
      <button onClick={clickHandler}>+</button>
    </div>
  );
}

export default memo(ChildComponent);
