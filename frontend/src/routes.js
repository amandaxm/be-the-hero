import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

/**
 * browser router , envolta para o roteamento funcione
 * route cada uma das rotas
 * switch, apenas uma rota executada no momento
 *path caminho
 *exact, caminho exato para abrir a pagina
 */

export default function Routes() {
    return(
    <BrowserRouter>
       <Switch>
       
       <Route path="/" exact component={Logon} />
       <Route path="/register" component={Register} />
       <Route path="/profile" component={Profile} />
       <Route path="/incidents/new" component={NewIncident} />

        </Switch>
    </BrowserRouter>
    );
}