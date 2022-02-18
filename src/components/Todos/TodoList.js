import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";
import {Link} from "@mui/material";

function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <>
      <h1>The ToDo List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
