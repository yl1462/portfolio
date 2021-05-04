import React from 'react'
import WarmWelcomePage from './GREScreenShots/WarmWelcomePage.jpg'
import questionTypes from './GREScreenShots/questionTypes.jpg'
import Flexibility from './GREScreenShots/Flexibility.jpg'
import BuiltInDictionary from './GREScreenShots/BuiltInDictionary.jpg'

function GRE() {
  return(
    <div className="intro">
      
      <br /><h3>GRE Verbal Practice App</h3><br />

          <p>This is a web app aiming to help GRE learners to practice their verbal questions.</p><br />

          <p>Screenshots:</p>

          <p>A warm welcome page with a thank you note:</p>

          <img src={ WarmWelcomePage } alt="A warm welcome page with a thank you note" /><br />

          <p>Users can choose between 2 types of questions:</p>

          <img src={ questionTypes } alt="Users can choose between 2 types of questions" /><br />

          <p>Flexibility in self study:</p>

          <img src={ Flexibility } alt="Flexibility in self study" /><br />

          <p>Built In Dictionary:</p>

          <img src={ BuiltInDictionary } alt="Built In Dictionary"  /><br />

          <p>List of skills/tech used:</p>

          <ul className="list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li><br />
          </ul>

          <a href="https://github.com/yl1462/GRE_Verbal_Practice_App.git" target="_blank" rel="noreferrer"
            >Link to GitHub repo</a><br />

          <a href="https://yl1462.github.io/GRE_Verbal_Practice_App/" target="_blank" rel="noreferrer">Link
            to the live app</a><br />

    </div>
  )
}

export default GRE