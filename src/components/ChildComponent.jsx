import { memo } from "react";

function ChildComponent({ num }) {
  console.log("child component is renderd");
  return (
    <div>
      ChildComponent
      <span>{num}</span>
    </div>
  );
}

export default memo(ChildComponent);
