import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [display, setDisplay] = useState("");

  const HandleInput = (e) => {
    setDisplay(display + e.target.value);
  }
  
  const HandleClear = () => {
    setDisplay("");
  }

  const HandleEqual = () => {
    let result = eval(display);
    setDisplay(result);
  }

  return (
    <main>
      <div className="background w-screen h-screen"></div>
       <div className="title text-white text-2xl md:text-5xl font-black tracking-widest leading-loose">
          Calculator
        </div>

        <div className="center border w-5/6 md:w-1/6 h-3/6 bg-blue-100 border-4 border-white">
          <div className="h-full">
          <input disabled value={display} className="bg-white text-2xl text-center w-full h-1/6"></input>

            <div className="w-full my-1">
            <button onClick={HandleInput} value="+" className="text-2xl w-1/3 border-2 border-white" >+</button>
            <button onClick={HandleInput} value="-" className="text-2xl w-1/3 border-2 border-white">-</button>
            <button onClick={HandleEqual} className="text-2xl w-1/3 border-2 border-white">=</button>
            </div>
            <div className="w-full my-1">
            <button onClick={HandleInput} value="/" className="text-2xl w-1/3 border-2 border-white">/</button>
            <button onClick={HandleInput} value="*" className="text-2xl w-1/3 border-2 border-white">*</button>
            <button onClick={HandleInput} value="1" className="text-2xl w-1/3 border-2 border-white">1</button>
            </div>
            <div className="w-full my-1">
            <button onClick={HandleInput} value="2" className="text-2xl w-1/3 border-2 border-white">2</button>
            <button onClick={HandleInput} value="3" className="text-2xl w-1/3 border-2 border-white">3</button>
            <button onClick={HandleInput} value="4" className="text-2xl w-1/3 border-2 border-white">4</button>
            </div>
            <div className="w-full my-1">
            <button onClick={HandleInput} value="5" className="text-2xl w-1/3 border-2 border-white">5</button>
            <button onClick={HandleInput} value="6" className="text-2xl w-1/3 border-2 border-white">6</button>
            <button onClick={HandleInput} value="7" className="text-2xl w-1/3 border-2 border-white">7</button>
            </div>
            <div className="w-full my-1">
            <button onClick={HandleInput} value="8" className="text-2xl w-1/3 border-2 border-white">8</button>
            <button onClick={HandleInput} value="9" className="text-2xl w-1/3 border-2 border-white">9</button>
            <button onClick={HandleInput} value="0" className="text-2xl w-1/3 border-2 border-white">0</button>
            </div>
            <div className="w-full my-1">
            <button onClick={HandleInput} value="." className="text-2xl w-1/2 border-2 border-white">.</button>
            <button onClick={HandleClear} className="text-2xl w-1/2 border-2 border-white">C</button>
            </div>
         </div>
   
   
        </div>
    </main>
  );
}

export default App;
