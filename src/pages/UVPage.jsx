import React from 'react';
import '../css/UVPage.css';
import logo from '../assets/ttalogo.png';
import Star from '../assets/Star.png';


function UVPage() {
  return (
    <div className="App">
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      {/* <button className="home-button">Home</button> */}
      <button className= "login-button"> Login</button>
    </header>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Inder&family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>


      <div className="leftRectangle">
        <h4>Overall Rating</h4>
        <h7>4.2</h7>
        <img src={Star} alt="Star" />
        <h4>Cleaniness</h4>
        <h7>2.3</h7>
        <img src={Star} alt="Star" />
        <h4>Location</h4>
        <h7>4.3</h7>
        <img src={Star} alt="Star" />
        <h4>Building</h4>
        <h7>1.4</h7>
        <img src={Star} alt="Star" />
        <h4>Condition</h4>
        <h7>3.4</h7>
        <img src={Star} alt="Star" />
      </div>
      <div className="mainRectangle">
        <h1>University Village</h1>
        </div>
      <div className="reviewContainer">
        <div className="review">
          <img src="review-image.jpg" alt="Review" className="reviewImage" />
          <div className="ratingRectangle">


          </div>
          <div className="ratings">
            <span className="rating">5/5</span>
            <span className="rating">4/5</span>
            <span className="rating">3/5</span>
          </div>
          <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat diam id purus tristique, ut condimentum velit vehicula.</p>
        </div>
        <div className="reviewContainer">
        <div className="review">
          <img src="review-image.jpg" alt="Review" className="reviewImage" />
          <div className="ratingRectangle">


          </div>
          <div className="ratings">
            <span className="rating">5/5</span>
            <span className="rating">4/5</span>
            <span className="rating">3/5</span>
          </div>
          <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat diam id purus tristique, ut condimentum velit vehicula.</p>
        </div>
        <div className="reviewContainer">
        <div className="review">
          <img src="review-image.jpg" alt="Review" className="reviewImage" />
          <div className="ratingRectangle">


          </div>
          <div className="ratings">
            <span className="rating">5/5</span>
            <span className="rating">4/5</span>
            <span className="rating">3/5</span>
          </div>
          <p className="reviewText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat diam id purus tristique, ut condimentum velit vehicula.</p>
        </div>
        <div className= "submitButton">
     <button className="submit-review-button">Submit a Review</button>
    </div>
   </div>
    </div>
   </div>
   </div>




  );
}


export default UVPage;