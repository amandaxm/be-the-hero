const express = require('express');  
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());//converter em algo entendivel
app.use(routes);
/**
 *
 * server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
/**
 *  Rota/ Recurso
 * n  
 * get: buscar/listar uma nformação do backend , dado de usuario
 * put: alteraar uma informacao no back-end
 * post: criar uma informação back-end
 * delete: deletar uma informação no backend
 */

 /**
  * tipos de paramentros:
  * Query params=> parametros nomeados que enviamos na url
  * apos ? e serve para filtros, paginação & 
  * Route params: identificar recursos, unico usuari /:id
  * Request Body: corpo da requisição criar ou alterar recursos
  */
/**
 * sql: mysql, sqlite, oracle
 * noSQ: MongoDB, CouchDB, etc
 */

 /**
  * Driver: select * from users
  * query builder: table('users').select('*').where
  */

  /**
   * QUAIS SAO AS ENTIDADES DO PROJETO
   * ONG 
   * CASOS O QUE ACONTECEU
   * FUNCIONALDADES
   * ========ONG=========
   * LOGIN
   * CADASTRO
   * LOGOUT
   * CADASTRAR NOVOS CASOS
   * DELETAR CASOS
   * LISTAR CASOS ESPECIFICOS DA ONG
   * ====================
   * 
   * ENTRAR EM CONTATO COM A ONG
   *
   * LISTAR TODOS CASOS 
   * 
   * 
   */

app.listen(3333);//porta da aplicação


