import React, {useState,useCallback} from 'react';
import Button from '../src/components/UI/Button/Button';

import './App.css';
import DemoOutput from './Demo/DemoOutput';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  console.log('app running')

  const paragraphChangeHandler = useCallback(() => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph)
  
  },[]);  



  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show = {false}/>
      <Button onClick = {paragraphChangeHandler}>Click On this!</Button>
    </div>
  );
}

export default App;
