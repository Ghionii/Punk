import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { GeneralInfo } from './Components/General';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Bands from './Components/Bands';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Bands />
    </>
  );
}

export default App;
