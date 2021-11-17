import React  from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
import './App.css';

import Home from "./pages/Home/Home";
import InformacionCiudad from "./pages/InformacionCiudad";


//views 


function App() {
  return (

    <><BrowserRouter>
      <Switch>
        <Route path="/" exact >
           <Home />
        </Route>
        <Route path="/:ciudad" exact>
          <InformacionCiudad/>
        </Route>
      </Switch>
    </BrowserRouter> </>
    
  );
}

export default App;
