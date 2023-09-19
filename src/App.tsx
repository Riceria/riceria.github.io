import React, { useState } from 'react';
import './App.css';
import { Title } from './components/texts/Title';
import { NavBar } from './components/nav/NavBar';
import { Paragraph } from './components/texts/Paragraph';


function App() {

  const OLD_SITE = "https://mercadobrendan7.wixsite.com/portfolio/home"
  const BG_CREDIT = "https://www.pixiv.net/en/artworks/59214087";

  const [currentMenu, setCurrentMenu] = useState(0);

  const onNavClickHandler = (num: number) => {
    setCurrentMenu(num);
  }

  return (
    <div className="App">
      <Title text={"BRENDAN MERCADO"}/>
      <h2 style={{color:'gold'}}>CURRENTLY UNDER CONSTRUCTION</h2>
      <div className="wrapper">
        <header className="nav-stack">
          <NavBar onMenuSwap={onNavClickHandler} />
          <Paragraph text={"My work is temporarily available on:"} />
          <a href={OLD_SITE} target='_blank' rel="noreferrer">mercadobrendan7.wixsite.com</a>
          <Paragraph text={"Website background by:"} />
          <a href={BG_CREDIT} target="_blank" rel="noreferrer">@CLare</a>
        </header>
      </div>
    </div>
  );
}

export default App;
