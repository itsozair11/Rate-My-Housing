import React from 'react';
import '../css/WelcomePage.css'; // Import the CSS file for styling
import UC from "../assets/UC.png";
import UV from "../assets/UV.png";
import CC from "../assets/CC.jpg";
import logo from "../assets/ttalogo.png";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inder&family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      <div className="centered-text">
      <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      {/* <button className="home-button">Home</button> */}
      <button className= "login-button"> Login</button>
    </header>
    <h1 className="heading"> Housing Options </h1>
        <div className="image-container">
          <div className="UCImage">
            <img src={UC} alt="University Commons" />
            {/* <p className="image-text">University Commons</p> */}
          </div>
          <div className="UVImage">
            <img src={UV} alt="University Village" />
            {/* <p className="image-text">University Village</p> */}
          </div>
          <div className="CCImage">
            <img src={CC} alt="Canyon Creek" />
            {/* <p className="image-text"> Canyon Creek</p> */}
          </div>
        </div>
      </div>


      <div className="phases-container">
        <div className="phases">
          <div className="UC">
          <p className="category-heading">University Commons Phases</p>
          <div className="phase">
            <p>Capella Hall</p>
          </div>
          <div className="phase">
            <p>Andromeda Hall</p>
          </div>
          <div className="phase">
            <p>Vega Hall</p>
          </div>
          <div className="phase">
            <p>Helix Hall</p>
          </div>
          <div className="phase">
            <p>Sirius Hall</p>
          </div>
          </div>
        </div>
        <div className="phases">
          <div className="UV">
          <p className="category-heading">University Village Phases</p>
          <div className="phase">
            <p>Phase 1</p>
          </div>
          <div className="phase">
            <p>Phase 2</p>
          </div>
          <div className="phase">
            <p>Phase 3</p>
          </div>
          <div className="phase">
            <p>Phase 4</p>
          </div>
          <div className="phase">
            <p>Phase 5</p>
          </div>
          <div className="phase">
            <p>Phase 6</p>
          </div>
          <div className="phase">
            <p>Phase 7</p>
          </div>
          <div className="phase">
            <p>Phase 8</p>
          </div>
          </div>
        </div>
        <div className="phases">
          <div className="CC">
          <p className="category-heading"> Canyon Creek Phases</p>
          <div className="phase">
            <p>Canyon Creek North</p>
          </div>
          <div className="phase">
            <p>Canyon Creek South</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WelcomePage;