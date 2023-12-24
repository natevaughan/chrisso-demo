import React, { useState } from "react";

const MyAlert = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    alert("your count was " + count)
  }

  return (
    <div onClick={handleClick}>Click to see count!</div>
  )
}

export default MyAlert;
