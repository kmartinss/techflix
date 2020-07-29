import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';
import './menu.css';
// import ButtonLink from './components/button-link';
import Button from '../buttons/index'


function Menu(){
  return (
    <nav className="menu">
      <Link to="/">
      <img className="logo" src = { Logo } alt="TechFlix Logo"/>
      </Link>
      <Button as={Link} className="button-link" to="/cadastro/video">
       Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;