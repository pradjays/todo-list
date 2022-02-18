import React, { useState, useEffect, useRef } from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import PlaylistAddCircleRoundedIcon from "@mui/icons-material/PlaylistAddCircleRounded";
import PendingIcon from "@mui/icons-material/Pending";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [status, setStatus] = useState(props.edit ? props.edit.status : 'todo');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      status: status,
      text: input
    });
    setInput('');
  };

  function handleChange(event, newStatus) {
    setStatus(newStatus);
  }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
          <input
            placeholder={props.edit ? 'Update ToDo Item' : 'Add ToDo Item'}
            value={input}
            onChange={event => {setInput(event.target.value)}}
            name='text'
            ref={inputRef}
            className={props.edit ? 'todo-input edit' : 'todo-input'}
          />
          <button onClick={handleSubmit} className={props.edit ? 'todo-button edit' : 'todo-button'}>
            {props.edit ? 'UPDATE' : 'ADD'}
          </button>
      {props.edit && (
          <ToggleButtonGroup
              value={status}
              exclusive
              size="small"
              className="mt-1"
              onChange={handleChange}
          >
            <ToggleButton value="todo"><PlaylistAddCircleRoundedIcon sx={{color: '#cb1d1d'}} />TODO</ToggleButton>
            <ToggleButton value="progressing"><PendingIcon sx={{color: '#f6cc00'}} />IN PROGRESS</ToggleButton>
            <ToggleButton value="done"><CheckCircleIcon sx={{color: '#22a10e'}} />DONE</ToggleButton>
          </ToggleButtonGroup>
      )}
    </form>
  );
}

export default TodoForm;
