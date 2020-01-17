import React, { useEffect } from 'react';
import './App.css';
// import Input from './components/Input';
// import Header from './components/Header';
import Box from './components/Box';
import IncrementButton from './components/IncrementButton';
import { useSelector, useDispatch } from 'react-redux';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.cardReducer.count);
  const color = useSelector((state: any) => state.cardReducer.color);
  const dogURL = useSelector((state: any) => state.APIReducer.dog);
  const json = useSelector((state: any) => state.JSONReducer.json && state.JSONReducer.json.title);

  useEffect(() => {
    dispatch({
      type: 'API_CALL_REQUEST'
    });

    dispatch({
      type: 'JSON_CALL_REQUEST'
    });
  }, []);

  const handleChangeColor = () => {
    dispatch({
      type: 'CHANGE_COLOR_SAGA'
      // ,
      // payload:'gold'
    });
  };

  return (
    <div className="App">
      Hi
      <br />
      Count: {count}
      {/*<Input />*/}
      {/*<Header content={'Title!'} />*/}
      {/*<Box color={color} />*/}
      {/*<IncrementButton />*/}
      {/*<button onClick={handleChangeColor}>CHANGE COLOR</button>*/}

      <br/>

      <img src={dogURL} alt="dog" width={90}/>

        <br/>

        {
            json && json
        }
    </div>
  );
};

export default App;
