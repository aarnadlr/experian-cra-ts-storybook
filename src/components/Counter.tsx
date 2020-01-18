import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

type CounterProps = {
  initialCount: number;
  incrementor: number;
};
const Counter: React.FC<CounterProps> = ({initialCount, incrementor}) => {

    const [localCount, setLocalCount] = useState(initialCount);

    // const dispatch = useDispatch();

    const handleDecrement = ()=>{
        // dispatch({
        //     type: 'DECREMENT_SAGA',
        //     payload: incrementor
        // })
        setLocalCount(localCount+incrementor)
    };

    const handleIncrement = ()=>{
        // dispatch({
        //     type: 'INCREMENT_SAGA',
        //     payload: incrementor
        // })
        setLocalCount(localCount+incrementor)
    };

    return (
        <div>
          <button onClick={handleDecrement}>-</button>

          Count: {localCount}

          <button onClick={handleIncrement}>+</button>
        </div>
      );

};

export default Counter;
