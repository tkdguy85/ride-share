import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Rocket from './components/pages/Rocket'
import Payload from './components/pages/Payload'
import Form from './components/pages/Form'


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/Rockets' component={Rocket} />
          <Route path='/Specs' component={Payload} />
          <Route path='/form' component={Form} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
