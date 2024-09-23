import React from "react";

function FunctionClick() {
  const handleClick = () => {
    // Handle the button click here
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick()}>Click</button>
    </div>
  );
}

export default FunctionClick;