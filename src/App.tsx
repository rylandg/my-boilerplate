import '@reshuffle/code-transform/macro';
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { hello } from '../backend/backend';

const App: React.FC = () => {
  const [text, setText] = useState<string>('hello');
  useEffect(() => {
    async function getText() {
      const response: string = await hello('Reshuffle user');
      setText(response);
    }
    getText();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
