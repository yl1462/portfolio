import React from 'react';
import portfolio from '../image/portfolio.jpg'

function Home() {
  const lastChild = {
    marginRight: 0
  }
  return (
    <div className="intro">
      <img src={portfolio} alt='portfolio' style={{width:250}}/>

      <h2>Hello!</h2><br />
      <p>I'm a software engineer and Mandarin Chinese Teacher living in San Antonio, Texas.</p><br />
      <p>I really enjoy:</p><br />
      <ul className="list">
        <li>sharing new technical tricks with my teacher friends</li><br />
        <li>thinking about innovative solutions for every day challenges</li><br />
        <li style={lastChild}>growing together with my community, and voyaging in this digital era</li><br />
      </ul>
      <p>Please feel free take a look around my website, and contact me should you have any questions.</p>
    </div>
  )
}

export default Home