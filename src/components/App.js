import React, { useState } from "react";
import { Input } from "antd";
import "./App.css";
import { Todo } from "./Todo";
const App = () => {
  const [value = "", setValue] = useState();
  const [todos = [], setTodos] = useState();

  const onFormSubmit = event => {
    event.preventDefault();

    setTodos([...todos, value]);
    setValue("");
  };

  const onInputChange = event => {
    setValue(event.target.value);
  };

  const removeTOdo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      Add New Task!
      <form onSubmit={onFormSubmit}>
        <Input
          size="small"
          placeholder="Add Task..."
          value={value}
          onChange={onInputChange}
          type="text"
        />
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <Todo
              onTodoRemoved={() => removeTOdo(index)}
              todo={todo}
              key={index.toString()}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default App;
