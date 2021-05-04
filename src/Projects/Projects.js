import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom';
import GRE from './individualProjects/GRE/GRE'
import ToDoApp from './individualProjects/To-doListApp/To-doListApp'
import Diet from './individualProjects/DietitiansRestaurantLocator/DietitiansRestaurantLocator'

function Projects() {
  return (
    <div className='intro'>

      <h2>Projects</h2>

      <div className="projects">
        <NavLink activeClassName="active" to='/projects/gre'>1. GRE</NavLink>
        <NavLink activeClassName="active" to='/projects/todoapp'>2. To Do List App</NavLink>
        <NavLink activeClassName="active" to='/projects/diet'>3. Dietitian's Restaurant Locator</NavLink>
      </div>

      <Switch>

        <Route path='/projects/gre'><GRE /></Route>
        <Route path='/projects/todoapp'><ToDoApp /></Route>
        <Route path='/projects/diet'><Diet /></Route>

      </Switch>

    </div>
  )
}

export default Projects