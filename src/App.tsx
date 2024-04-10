import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { AttivitaCard } from './components/attivita-card/attivitacard';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carosello } from './components/carosello/carosello';

function App() {
  return (
    <>
      <Header text='Gestione Attività'/>
      <div className='body'>
        <Carosello/>
      </div>
    </>
  );
}

export default App;
