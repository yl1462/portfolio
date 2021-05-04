import React from 'react'
import todo1 from './ToDoScreenShots/todo1.png'
import todo2 from './ToDoScreenShots/todo2.png'
import todo3 from './ToDoScreenShots/todo3.png'

function ToDoApp() {
  return (
    <div className="intro">

      <br /><h3>To Do List App</h3><br />

      <p>Just like the name says, this is an app for you to add, edit, delete your day to day to do items. There is no ad or complicated functions to distract yourself. Simple but functional.</p><br />

      <p>Screenshots:</p>

      <p>Straight forward to do list:</p>
      <img src={todo1} alt="app main page" /><br />

      <p>One click to add new to do item with description for more details:</p>
      <img src={todo2} alt="add new function" /><br />

      <p>Need to change something, no need to delete and restart, just 'edit':</p>
      <img src={todo3} alt="edit and delete function" /><br />

      <p>Technology used:</p>
      <ul>
        <li>Javascript</li>
        <li>Node</li>
        <li>CSS</li>
        <li>HTML</li><br />
      </ul>

      <a href="https://todolist-app-yl1462.vercel.app/" target="_blank" rel="noreferrer">Link to live app</a><br />

      <a href="https://github.com/yl1462/todolist-app.git" target="_blank" rel="noreferrer">Link to client side repo</a><br />

      <a href="https://afternoon-springs-29511.herokuapp.com/" target="_blank" rel="noreferrer">Link to server side repo</a>
      
    </div>

  )
}

export default ToDoApp