import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))}>All</button>
      <button onClick={() => dispatch(setFilter('done'))}>Done</button>
      <button onClick={() => dispatch(setFilter('not_done'))}>Not Done</button>
    </div>
  );
};

export default Filter;

