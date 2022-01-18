import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import TablaMonedas from './components/TablaMonedas';
import logo from './img/logo.png';
import loader2 from './img/loader.gif';
import Login from './components/Login';

function App() {

  window.onload = () => {
    fadeOut();
  }

function loader(){
  document.querySelector('.loader').classList.add('active')
}

function fadeOut(){
  setTimeout(loader,2500);
}

function fraseAleatoria() {
  let rnd = Math.floor(Math.random() * frases.length +1);
  let cadena = '';
  switch (rnd) {
    case 1:
      for (let i = 0; i < frases.length; i++) {
        cadena = frases[0]             
      }
      break;

    case 2:
      for (let i = 0; i < frases.length; i++) {
        cadena = frases[1]              
      }
    break;

    case 3:
      for (let i = 0; i < frases.length; i++) {
        cadena = frases[2]               
      }
    break;

    case 3:
      for (let i = 0; i < frases.length; i++) {
        cadena = frases[3]              
      }
    break;

    case 4:
      for (let i = 0; i < frases.length; i++) {
        cadena = frases[4]                
      }
    break;
  
    default:
        cadena = 'BTC, ETH, BNB y mucho más...'
      break;
  }
  return cadena;
}

const frases = ['Arrancando Blockchain', 'Inflando los precios...', 'Cargando monedas', '¿Cual es tu crypto favorita?', 'Hold, sell, hold, sell'];
  const [monedas, setMonedas] = useState([]);
  const [buscar, setBuscar] = useState('');

  const getData = async () =>  {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    console.table(res.data);
    setMonedas(res.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="container">
      
      <header>
        <ul>
          <li><img src={logo} className='logo img-fluid'/></li>
          <li><h1 className='titulo'>Your own market</h1></li>
          <li ><i class="fas fa-user"></i></li>
        </ul>
      </header>
      <br />
      <div className="row">
        <input type="text" placeholder='Busca aquí...' 
        className='form-control bg-dark text-light border-0 mt-4 text-center'
        onChange={busqueda => setBuscar(busqueda.target.value)} />
        <TablaMonedas monedas={monedas} buscar={buscar}/>
      </div>
      <div className="loader">
        <img src={loader2} />
        <h1 className='loader-text'>{fraseAleatoria()}</h1>
      </div>
    </div>
  );
}

export default App;
