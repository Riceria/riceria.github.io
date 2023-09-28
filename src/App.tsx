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
    <div className="App hero-image">
      <div className="wrapper">
        {/* <h2 style={{color:'gold'}}>CURRENTLY UNDER CONSTRUCTION</h2> */}
        <Title text={"BRENDAN MERCADO"}/>
        <header className="nav-stack">
          <NavBar onMenuSwap={onNavClickHandler} />
        </header>
        <div className="footer">
          <Paragraph text={"My work is temporarily available on:"} linkText={"mercadobrendan7.wixsite.com"} aLink={OLD_SITE} />
          <Paragraph text={"Website background by:"} linkText={"@CLare"} aLink={BG_CREDIT} />
        </div>
      </div>
    </div>
  );
}

export default App;
