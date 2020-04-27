/**diferença react native vc js
//native nao tem as mesmas tags de html
//view e text
//sempre usar o text
//nao tem semantica, todo text é tex
//estilização, passa style , que recebe


//um objeto com a estilização
todos elementos do native, ja tem display flex por padrao

propriedades:

background-color
no native 
backgroundColor



herança de estilo
 componentes nao herdam
 estilização propria por elemnto

*/
import 'intl'; 
import 'intl/locale-data/jsonp/pt-BR';
import React from "react";

import Routes from "./src/routes";

export default function App() {
  return (
  <Routes />
  );
}

