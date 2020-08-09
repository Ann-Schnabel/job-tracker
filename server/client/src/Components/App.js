import React from 'react';
import '../Styles/App.css';
import { Switch, Route } from "react-router"

import Home from './Home'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
