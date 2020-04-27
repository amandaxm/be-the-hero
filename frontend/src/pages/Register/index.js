import React, {useState, useLayoutEffect} from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi'

import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
//iniciando a importacao da api para integração
import api from '../../services/api';
export default function Register(){
  
        //variavel e funcao para modificar a variavel
       const[name, setName] = useState('');//inicia vazia
       const[email, setEmail] = useState('');
       const[whatsapp, setWhatsapp] = useState('');
       const[city, setCity] = useState('');
       const[uf, setUf] = useState('');
    
       const history =  useHistory()//enviar o id para pagina de login

    
    
    async function handleRegister(e){
    //funcao responsavel por fazer cadastro do usuario
    //disparada assim que o usuario fizer um submit
    // form onSubmit= chama essa funcao
    //recebe envento de submit de formulario
    //nao ira recarregar a pagina, com o e prevent
       
       e.preventDefault();
       //acesso as informações
       const data = {
           name,
           email,
           whatsapp,
           city,
           uf,

       };
       //rota insominia para criar, e quais dados enviar
       //pegar resposta de sucesso
       try{//se flahar, cai no catch
        const response = await api.post('ongs', data);
        //data o resultado 
        alert(`Seu ID de acesso: ${response.data.id}`);//acessar o id e mostrar
        history.push('/')//envia para o login
       }catch(err){
           alert('Erro no cadastro, tente novamente.');
        }

    
    }
   
    return (
        <div className="register-container">
            <div className="content">
                
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a enconrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/register">
                    <FiArrowLeft size={16} color="#e02041" />

                    Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                          placeholder="Nome da ONG" 
                          value={name}
                          onChange={e => setName(e.target.value)}
                     //quando mudar, setar o valor do input,
                     //colocando dentro da variavel name
                     />

                    <input type="email" 
                           placeholder="E-mail"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                           placeholder="WhatsApp"
                           value={whatsapp}
                           onChange={e => setWhatsapp(e.target.value)}
                           />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                           />
                        
                        <input 
                        placeholder="UF" 
                        style={{width: 80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                       />
                    
                    </div>
                    <button className="button" type="submit">
                    Cadastrar
                    </button>
                    
                    
                </form>
            </div>
        </div>
    );
}