import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useHistory } from 'react-router-dom';


type EventProps = Event & {
  detail?: {
    userName?: string
  }
}

function App() {
  const history = useHistory()


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
        <button type="button" onClick={() => history.push('/dashboard')}> ir para dash </button>

      </header>
    </div>
  );
}

export default App;
