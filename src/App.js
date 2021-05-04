import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <div>
          <h1>Yuri Liang</h1>
          <h2>Fast Learning Software Engineer</h2>
        </div>

        <div className="NavBar-Direction">
          <NavLink exact activeClassName="active" to='/'  className="NavBar">Home</NavLink>
          <NavLink activeClassName="active" to='/about'  className="NavBar">About</NavLink>
          <NavLink activeClassName="active" to='/projects/gre'  className="NavBar">Projects</NavLink>
          <NavLink activeClassName="active" to='/contact'  className="NavBar">Contact</NavLink>
        </div>
      </header>

      <main>

        <Switch>

          <Route exact path='/'><Home /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/projects'><Projects /></Route>
          <Route path='/contact'><Contact /></Route>

        </Switch>

      </main>

    </div>
  );
}

export default App;
