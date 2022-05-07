import './App.css';
import React from 'react';
import { Route } from 'react-router';
 import Home from './componentes/home';
  import {DetailCountry} from './componentes/DetailCountry';
  import Activities from './componentes/activities';
  import landing from './componentes/landing';

function App() {
  return (
    <div className="App">

      

      <Route exact path="/" component={landing} />
      <Route exact path="/countries" component={Home} />
      <Route exact path="/countries/:id" component={DetailCountry} />
      <Route path="/activities" component={Activities} />
    </div>
  );
}

export default App;
