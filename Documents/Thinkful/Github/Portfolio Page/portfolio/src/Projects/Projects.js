import React from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import GRE from './individualProjects/GRE/GRE'
import ToDoApp from './individualProjects/To-doListApp/To-doListApp'
import Diet from './individualProjects/DietitiansRestaurantLocator/DietitiansRestaurantLocator'

function Projects() {
  return (
    <div>
      <Link to='/projects' className='projects'>
        <h1>Projects</h1>
      </Link>

      <Link to='/projects/gre'>GRE</Link>
      <Link to='/projects/todoapp'>To Do List App</Link>
      <Link to='/projects/diet'>Dietitian's Restaurant Locator</Link>

      <Switch>

        <Route path='/projects/gre'><GRE /></Route>
        <Route path='/projects/todoapp'><ToDoApp /></Route>
        <Route path='/projects/diet'><Diet /></Route>

      </Switch>
      
    </div>
  )
}

export default Projects