import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Main} from './components/Login/Main';
import {Chat} from './components/Chat';
import {GlobalProvider} from './components/GlobalState';
import "./App.css";


function App() {
  return (
    <Router>
      <GlobalProvider>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/chat" component={Chat}/>
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
