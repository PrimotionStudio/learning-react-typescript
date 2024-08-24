import React, { useState } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Todo from "./Model";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          task: todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="App">
      <h1>Taskify</h1>
      <InputField todo={todo} setTodo={setTodo} addTask={addTask} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
