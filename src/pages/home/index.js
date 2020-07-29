import React from 'react';
import Menu from '../../components/menu';
import BannerMain from '../../components/banner-main';
import DadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/carousel';
import Footer from '../../components/footer';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain videoTitle = { DadosIniciais.categorias[0].videos[0].titulo} 
                  url = {DadosIniciais.categorias[0].videos[0].url}
                  videoDescription = {" O que é o Front-end?"} />

      <Carousel ignoreFirstVideo category = { DadosIniciais.categorias[0]} />
      
      <Carousel category = { DadosIniciais.categorias[1]} />
      <Carousel category = { DadosIniciais.categorias[2]} />
      <Carousel category = { DadosIniciais.categorias[3]} />
      <Carousel category = { DadosIniciais.categorias[4]} />
      <Carousel category = { DadosIniciais.categorias[5]} />

      <Footer></Footer>

    </div>
  );
}

export default Home;
