import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../redux/actions';

const Task = ({ id, description, isDone }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleTask(id));
  const handleEdit = () => {
    const newDescription = prompt('Edit task:', description);
    if (newDescription) dispatch(editTask(id, newDescription));
  };
  const handleDelete = () => dispatch(deleteTask(id));

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      {isDone ? <s>{description}</s> : description}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
