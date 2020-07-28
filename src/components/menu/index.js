import React from 'react';
import Logo from '../../assets/images/Logo.png';
import './menu.css';
// import ButtonLink from './components/button-link';
import Button from '../buttons/index'


function Menu(){
  return (
    <nav className="menu">
      <a href="/">
      <img className="logo" src = { Logo } alt="TechFlix Logo"/>
      </a>
      <Button className="button-link" href="/">
       Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;