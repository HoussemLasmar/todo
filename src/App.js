import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Filter from './components/Filter';

const App = () => {
  return (
    <div>
      <h1>ToDo Application</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
};

export default App;
