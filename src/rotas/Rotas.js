import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import TipoUsuario from "../paginas/TipoUsuariosPage";
import Header from "../paginas/Header";

const Rotas = () => {
   return (
      <Router>
         <Header />
         <Switch>
            <Route
               path="/controle/tipo-usuario"
               component={TipoUsuario}
            />
         </Switch>
      </Router>
   );
};

export default Rotas;
