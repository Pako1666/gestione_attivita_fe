import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { AttivitaCard } from './components/attivita-card/attivitacard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header text='Gestione Attività'/>
      <div className='carosello-attivita'>
        <AttivitaCard {
          ...{
            id:1,alias:"A1",lavorata:true
          }
        }/>

        <AttivitaCard {
          ...{
            id:2,alias:"A2",lavorata:true,attivitaPadre:1
          }
        }/>

<AttivitaCard {
          ...{
            id:2,alias:"A2",lavorata:true,attivitaPadre:1
          }
        }/>


        

      </div>
    </div>
  );
}

export default App;
