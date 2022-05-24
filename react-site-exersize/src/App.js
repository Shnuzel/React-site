import React, { useState } from 'react';
import './App.css';


function App() {

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState();

  const calculatorAdd = () => {
    setResult(parseInt(value1)+parseInt(value2));
  }

  const calculatorMulti = () => {
    setResult(parseInt(value1)*parseInt(value2));
  }

  const calculatorDiv = () => {
    setResult(parseInt(value1)/parseInt(value2));
  }
  const calculatorSub = () => {
    setResult(parseInt(value1)-parseInt(value2));
  }


  return (
    
    <div className="center"> 
    <div className='al'> 
      <div className="back">
        <div>
      <label className="text">
        Number1:
        <input className="input"  type="number" name="num1" onChange={e => setValue1(e.target.value)}/>
      </label><br></br>
      <label className="text">
        Number2:
        <input className="input" type="number" name="num2" onChange={e => setValue2(e.target.value)}/>
      </label><br></br>
      <label className="text"> 
        Result: {result}
      </label> 
      </div>
      
      </div>
      <div >
        <div className="bottom">
      <button className="short color" onClick={calculatorAdd}>Add</button>
      <button className="short color" onClick={calculatorMulti}>Multiply</button><br></br>
      <button className="short color" onClick={calculatorDiv}>Divide</button>
      <button className="short color" onClick={calculatorSub}>Subtract</button>
      </div>
      </div>
      </div>    
   </div>

  );
}

export default App;
