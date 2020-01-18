import React from 'react';
import {useDispatch} from 'react-redux';


type ResetProps = {
  upperBound: number;
  lowerBound: number;
  count: number;
};
const Reset: React.FC<ResetProps> = ({ count, upperBound, lowerBound }) => {

  const dispatch = useDispatch();

  const handleReset = ()=>{
    dispatch({
      type:'RESET_SAGA'
    })
  }

  return (
    <div>

      {/*{count >= upperBound && 'The count is too high!'}*/}

      {count >= upperBound && (
          <>
          <br/>
          'The count is too high!'
          <br/>
          <button onClick={handleReset}>RESET</button>
          </>
      )}


      {count <= lowerBound && (
          <>
            <br/>
            'The count is too low!'
            <br/>
            <button onClick={handleReset}>RESET</button>
          </>
      )}



      <br/>

    </div>
  );
};

export default Reset;
