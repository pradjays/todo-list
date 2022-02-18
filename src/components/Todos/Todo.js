import React, { useState } from 'react';
import TodoForm from './TodoForm';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';
import PlaylistAddCircleRoundedIcon from '@mui/icons-material/PlaylistAddCircleRounded';

const Todo = ({ todos, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    status: 'todo',
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: '',
      status: 'todo'
    });
  };

  if (edit.id) {
      return (
          <>
          <TodoForm edit={edit} onSubmit={submitUpdate} />
          <Todo todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
          </>
      );
  }

  const getStyle = (status) => {
    if (status === 'todo') {
      return 'todo-border';
    } else if (status === 'progressing') {
      return 'in-progress-border'
    } else if (status === 'done') {
      return 'complete-border';
    }
  }

  return todos.map((todo, index) => (
    <div
      className={'todo-row ' + getStyle(todo.status)}
      key={index}
    >
      <div key={todo.id} className='todo-text'>
        {todo.text}
      </div>
      <div className='icons'>
        <ToggleButtonGroup
            value={todo.status}
            exclusive
            size="small"
            disabled={true}
        >
          <ToggleButton value="todo"><PlaylistAddCircleRoundedIcon sx={{color: '#cb1d1d'}} /></ToggleButton>
          <ToggleButton value="progressing"><PendingIcon sx={{color: '#f6cc00'}} /></ToggleButton>
          <ToggleButton value="done"><CheckCircleIcon sx={{color: '#22a10e'}} /></ToggleButton>
        </ToggleButtonGroup>
        <EditOutlinedIcon
          onClick={() => setEdit({ id: todo.id, value: todo.text, status: todo.status })}
          className='edit-icon'
        />
        <HighlightOffOutlinedIcon
            onClick={() => removeTodo(todo.id)}
            className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default Todo;
