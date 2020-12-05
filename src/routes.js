import { Switch, Route } from 'react-router-dom';

import  Fale_Conosco  from './Pages/Fale_Conosco'
import  Lojas  from './Pages/Lojas'
import  Produtos  from './Pages/Produtos'
import Pagina_Inicial from './Pages/Pagina_Inicial';


function Routes(){
    return (
        <Switch>
            <Route exact path="/Pagina_Inicial" component={ Pagina_Inicial } />
            <Route exact path="/Produtos" component={ Produtos } />
            <Route exact path="/Lojas" component={ Lojas } />
            <Route exact path="/Fale_Conosco" component={ Fale_Conosco } />
        </Switch>
    )

}

export default Routes;
