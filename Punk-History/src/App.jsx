import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { GeneralInfo } from './Components/General';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';

function App() {
  return (
    <>
      <Header />
      <Nav />

    </>
  );
}

export default App;
