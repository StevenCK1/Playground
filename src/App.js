import { useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

function App() {
  const [count, setCount] = useState(0)
  const addOne = function() {
    const newCount = count + 1
    setCount(newCount)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{count}</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <Button addOne={addOne}></Button>
      </header>
    </div>
  );
}

export default App;
