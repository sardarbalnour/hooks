import { useState, useTransition } from "react";

function arrayCreator(number = 10) {
  const myArray = [];
  for (let index = number; index > 0; index--) {
    myArray.push(index);
  }

  return myArray;
}

function TransitionComponent() {
  console.log("transition component is rendered");
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(arrayCreator());
  const [isPending, startTransition] = useTransition();

  const changeHandler = (event) => {
    setValue(event.target.value);
    startTransition(() => setCounter(arrayCreator(event.target.value)));
  };

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} />
      {counter.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </div>
  );
}

export default TransitionComponent;
