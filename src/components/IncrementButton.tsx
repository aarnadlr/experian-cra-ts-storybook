import React from 'react';
import { useDispatch } from 'react-redux';

const IncrementButton = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'INC'
    });
  };

  return <button onClick={handleClick}>Click to increment!</button>;
};

export default IncrementButton;
