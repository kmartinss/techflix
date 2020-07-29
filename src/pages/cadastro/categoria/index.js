import React from 'react';
import PageDefault from '../../../components/page-default';
import { Link } from 'react-router-dom';


function CadastroCategoria(){
  return (
    <PageDefault>
      <h1> Cadastro de categorias </h1>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;