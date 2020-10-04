import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './Pages/MainPage'
import PersonsPage from './Pages/PersonsPage'
import Menu from './Elements/Menu'

function App() {
  return (
    <Router>
          <Switch>
          <Route exact path="/">
                <Menu/>
                <MainPage/>
          </Route>
          <Route path="/persons">
               <Menu/>
               <PersonsPage/>
          </Route>
          <Route path="*">
              <div> Patch error: 404  </div>
          </Route>
        </Switch>
   
    </Router>

      );
}

export default App;
