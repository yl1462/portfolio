import React from 'react'
import diet1 from './DietScreenShots/diet1.png'
import diet2 from './DietScreenShots/diet2.png'
import diet3 from './DietScreenShots/diet3.png'
import diet4 from './DietScreenShots/diet4.png'

function Diet() {
  return (
    <div className="intro">

      <br /><h3>Dietitian's Restaurant Locator</h3><br />

      <p>This is an app for you to contribute, update, and of course, browse restaurants that fit various dietary needs. We are just getting started. For now, please choose between: Keto, Mediterranean, and Plant-based diet. There is no ad or complicated functions to confuse you. Simple but functional.</p><br />

      <p>Screenshots:</p>

      <p>Landing page gives a brief introduction on the app:</p>
      <img src={diet1} alt="diet1" />
      <p>Main page of the app, restaurants (for demo purpose) with different dietary needs listed clearly for users. User can easily add, edit, or delete their entries: </p>
      <img src={diet2} alt="diet2" />
      <br />
      <img src={diet3} alt="diet3" />
      <p>Add new restaurant to the list and select the kind of diet that fits this restaurant: </p>
      <img src={diet4} alt="diet4" /><br />
      <p>Technology used:</p>

      <ul className="list">
        <li>Javascript</li>
        <li>Node</li>
        <li>CSS</li>
        <li>HTML</li><br />
      </ul>

      <a href="https://dietitians-restaurant-locator-yl1462.vercel.app/" target="_blank" rel="noreferrer">Link to live app</a><br />

      <a href="https://github.com/yl1462/DietitiansRestaurantLocator.git" target="_blank" rel="noreferrer"> Link to client side repo</a><br />

      <a href="https://desolate-refuge-01917.herokuapp.com/" target="_blank" rel="noreferrer">Link to server side repo</a><br />

    </div>
  )
}

export default Diet