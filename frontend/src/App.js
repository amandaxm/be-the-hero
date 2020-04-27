import React from 'react';
import './global.css';

//JSX integrado dentro do javascript 
//componente do react que retorna uma função html
//import Route  from 'react-router-dom';
import Routes from "./routes";

function App() {
  return (
    <Routes />
  ); 
  }

export default App;
// propriedqades, atributos
//children vai retornar


//ESTADO: INFORMALÇAO QUE VAI SER MANTIDA DENTRO DE
// UM COMPONENTE
// toda vez que alterado o componente rederiza novamente
//importar useState
//imutabilidade nunca manipulamos a variavel diretamente 
//precisamos soprepor o valor 