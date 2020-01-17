import * as React from 'react';
import './App.css';
import Input from './components/Input';
import Header from './components/Header';
import Box from './components/Box';
import IncrementButton from './components/IncrementButton';
import { useSelector, useDispatch } from 'react-redux';

const App: React.FC = () => {

    const dispatch = useDispatch();
  const count = useSelector((state:any) => state.cardReducer.count);
  const color = useSelector((state:any) => state.cardReducer.color);

  const handleChangeColor = ()=>{
      dispatch({
          type:'CHANGE_COLOR_SAGA'
          // ,
          // payload:'gold'
      })
  };

  return (
    <div className="App">

      Hi

        <br/>

       Count: {count}
      {/*<Input />*/}
      {/*<Header content={'Title!'} />*/}
      <Box color={color} />

      <IncrementButton />

        <button onClick={handleChangeColor}>CHANGE COLOR</button>
    </div>
  );
};

export default App;
