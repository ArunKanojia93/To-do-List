import React, { useState } from "react";
import { Button, Input } from "antd";
import "./App.css";

export const Todo = props => {
  const { todo, onTodoRemoved } = props;

  const [hovered = false, setHovered] = useState();
  const [checked = false, setChecked] = useState();

  const onCheck = () => setChecked(!checked);

  const onMouseEnter = () => setHovered(true);

  const onMouseLeave = () => setHovered(false);

  return (
    <div className="button">
      <Input className="check" type="checkbox" onClick={onCheck} />
      {checked ? <strike>{todo}</strike> : <li>{todo}</li>}

      <div
        className="icon"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Button
          icon={hovered ? "close-circle" : "check-circle"}
          type={hovered ? "danger" : "dashed"}
          shape="circle-outline"
          onClick={onTodoRemoved}
        />
      </div>
    </div>
  );
};
