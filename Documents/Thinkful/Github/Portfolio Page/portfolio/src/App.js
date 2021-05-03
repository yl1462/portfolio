import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import portfolio from './image/portfolio.jpg'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Link to='/' className='Home'>
          <h1>Yuri Liang</h1>
          <h2>Fast Learning Software Engineer</h2>
          <img src={portfolio} alt='portfolio' />
        </Link>

        <Link exact to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contact'>Contact</Link>
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
