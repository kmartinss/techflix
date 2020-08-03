import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/page-default';
import FormField from '../../../components/formfield';
import Button from '../../../components/buttons';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  useEffect(() => {
    console.log('testando');

    const URL = 'http://localhost:8080/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);
  // setTimeout(() => {
  //   setCategorias([
  //     ...categorias,
  //     {
  //       id: 1,
  //       nome: 'Front end',
  //       descricao: 'Uma categoria aí blz',
  //       cor: '#12DBB1',
  //     },
  //     {
  //       id: 2,
  //       nome: 'Back end',
  //       descricao: 'Uma categoria aí fecho',
  //       cor: '#12DBB1',
  //     },
  //   ]);
  // }, 4 * 1000);

  return (
    <PageDefault>
      <h1>
        {' '}
        Cadastro de categorias:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();

        setCategorias([
          ...categorias,
          values,

        ]);

        setValues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button> Cadastrar </Button>

      </form>

      {categorias.length === 0 && (
        <div>
          Carregando...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
