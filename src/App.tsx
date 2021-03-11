import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


type EventProps = Event & {
  detail?: {
    userName?: string
  }
}

function App() {

  const [name, setName] = useState('')

  useEffect(() => {

    document.addEventListener('hub-infos', (e: EventProps) => {
      setName(e?.detail?.userName || '')
    }, false)

  },[])
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {name && (
        <p>
          Olá, {name}
        </p>

        )}
        <a
          className="App-link"
          href="#!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bem vindo ao Micro-Frontend
        </a>
      </header>
    </div>
  );
}

export default App;
