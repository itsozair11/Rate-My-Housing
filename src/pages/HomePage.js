// HomePage.js

import React from 'react';
import '../pages/HomePage.css';
import UniversityCommonsImage from '../assets/images/University_Commons.png';
import UniversityVillageImage from '../assets/images/University_Village.png';
import CanyonCreekHeightsImage from '../assets/images/Canyon_Creek_Heights.png';
import ReviewPage from '../pages/ReviewPage';

const HomePage = () => {

  return (
    <>
      <div className="containerHome">
        <div className="message">RateMyHousing</div>
        <div className="sub-title">Housing Options</div>

        <div className="image-container">
          <div className="housing-item">
            <img src={UniversityCommonsImage} alt="University Commons" className="housing-image" />
            <div className="image-text">
              University Commons residence halls feature three-bedroom suites, recreation areas, large communal spaces, and study lounges. Available to first-year students.
              <div className="options">
                <p><a href="#">1. Andromeda</a></p>
                <p><a href="#">2. Capella</a></p>
                <p><a href="#">3. Sirius</a></p>
                <p><a href="#">4. Helix</a></p>
                <p><a href="#">5. Vega</a></p>
              </div>
            </div>
          </div>
          <div className="housing-item">
            <img src={UniversityVillageImage} alt="University Village" className="housing-image" />
            <div className="image-text">
              University Village apartments offer a variety of floor plans and amenities. Available to sophomores through seniors and graduate students.
              
              <div className="options">
                <p><a href="#">1. Phase 1</a></p>
                <p><a href="#">2. Phase 2</a></p>
                <p><a href="#">3. Phase 3</a></p>
                <p><a href="#">4. Phase 4</a></p>
                <p><a href="#">5. Phase 5</a></p>
                <p><a href="#">6. Phase 6</a></p>
                <p><a href="#">7. Phase 7</a></p>
                <p><a href={<ReviewPage />}>8. Phase 8</a></p>  {/* NOT SURE IF I LINKED THIS RIGHT */}
              </div>
            </div>
          </div>
          <div className="housing-item">
            <img src={CanyonCreekHeightsImage} alt="Canyon Creek Heights" className="housing-image" />
            <div className="image-text">
              Canyon Creek Height apartments offer a variety of floor plans and amenities. Available to sophomores through seniors and graduate students.
              <div className="options">
                <p><a href="#">1. Canyon Creek Heights South</a></p>
                <p><a href="#">2. Canyon Creek Heights North</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          {/* Your main content goes here */}
          
        </div>
      </div>
    </>
  );
  
};

export default HomePage;
