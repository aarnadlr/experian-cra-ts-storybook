import * as React from "react"
import './App.css';
import Input from "./components/Input";
import Header from "./components/Header";
import Box from "./components/Box";
import IncrementButton from "./components/IncrementButton";


const App: React.FC = () => {
  return (
    <div className="App">

      hii
      <Input />

      <Header content={'Title!'}/>

      <Box color={'lavender'}/>

      <IncrementButton/>
    </div>
  );
};

export default App;
