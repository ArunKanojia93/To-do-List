import React, { useState } from "react";

const List = props => {
    
    if (props.inputValue === "") {
        return <h1>Write Something to Display!</h1>
    } else {
  return (
    <div>
      <ul>
        <li>{props.inputValue}</li>
      </ul>
    </div>
  );
};
}
export default List;
