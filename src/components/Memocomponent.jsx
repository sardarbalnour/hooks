import { useState } from "react";
import ChildComponent from "./ChildComponent";

function Memocompoonent() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  console.log("memo is rendered");
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <ChildComponent num={num} />
      <span>{num}</span>
      <button onClick={() => setNum((num) => num + 1)}>+</button>
    </div>
  );
}

export default Memocompoonent;
