import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Landing } from './page/landing/Landing';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Landing>

        </Landing>
      </header>
    </div>
  );
}

export default App;
