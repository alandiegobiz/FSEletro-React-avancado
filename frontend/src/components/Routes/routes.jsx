import React from 'react';
import {Switch, Route} from 'react-router-dom';  

import Menu from '../Menu';
import Home from '../../pages/Home';
import Products from '../../pages/Products';
import Magazine from '../../pages/Magazine';
import Contact from '../../pages/Contact';

                
const Routes = () => {
    return(
        <>
                <Menu/>
                <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/Produtos" component={Products} />
                <Route path="/NossasLojas" component={Magazine}/>
                <Route path="/Contatos" component={Contact}/>
                </Switch>
        </>
        );
}  

export default Routes;