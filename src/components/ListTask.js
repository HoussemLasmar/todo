import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';


const ListTask = () => {
  const { tasks, filter } = useSelector(state => state);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true; // 'all'
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default ListTask;
