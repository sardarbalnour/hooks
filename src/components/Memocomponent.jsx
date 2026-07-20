import { useMemo, useState } from "react";
import ChildComponent from "./ChildComponent";

function Memocompoonent() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const slow = useMemo(() => {
    for (let index = 0; index < 1000000000; index++) {}
    return count;
  }, [count]);

  return (
    <div>
      <span>{slow}</span>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      {/* <ChildComponent num={num} /> */}
      <br />
      <span>{num}</span>
      <button onClick={() => setNum((num) => num + 1)}>+</button>
    </div>
  );
}

export default Memocompoonent;
