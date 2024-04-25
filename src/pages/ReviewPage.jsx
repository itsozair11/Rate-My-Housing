import React, { useState } from 'react';
import '../css/ReviewPage.css';
import logo from "../assets/ttalogo.png"


function ReviewPage() {
  const [cleanliness, setCleanliness] = useState(1);
  const [condition, setCondition] = useState(1);
  const [building, setBuilding] = useState(1);
  const [location, setLocation] = useState(1);
  const [reviewText, setReviewText] = useState('');
  const [pictures, setPictures] = useState([]);


  const handleFileChange = (e) => {
    const fileList = Array.from(e.target.files);
    setPictures(fileList);
  };


  const handleSubmit = () => {
    // Handle form submission here
    console.log("Cleanliness:", cleanliness);
    console.log("Condition:", condition);
    console.log("Building:", building);
    console.log("Location:", location);
    console.log("Review Text:", reviewText);
    console.log("Pictures:", pictures);
  };


  return (
   <div className="Write a Review">
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      {/* <button className="home-button">Home</button> */}
      <button className= "login-button"> Login</button>
    </header>


    <div className="container">
      <h1>Write a Review</h1>
      <div className="bigRectangle">
      <div className="ratings">
        <div className="rating">
          <label htmlFor="cleanliness"><b>Rate the Cleanliness:</b></label>
          <input type="range" id="cleanliness" name="cleanliness" min="1" max="5" value={cleanliness} onChange={(e) => setCleanliness(parseInt(e.target.value))} />
        </div>
        <div className="rating">
          <label htmlFor="condition"><b>Rate the Condition:</b></label>
          <input type="range" id="condition" name="condition" min="1" max="5" value={condition} onChange={(e) => setCondition(parseInt(e.target.value))} />
        </div>
        <div className="rating">
          <label htmlFor="building"><b>Rate the Building:</b></label>
          <input type="range" id="building" name="building" min="1" max="5" value={building} onChange={(e) => setBuilding(parseInt(e.target.value))} />
        </div>
        <div className="rating">
          <label htmlFor="location"><b>Rate the Location:</b></label>
          <input type="range" id="location" name="location" min="1" max="5" value={location} onChange={(e) => setLocation(parseInt(e.target.value))} />
        </div>
      </div>
      <div className="review">
        <div className="textarea-container">
          <label htmlFor="reviewText"><b>Write your review: </b></label>
          <textarea id="reviewText" name="reviewText" rows="4" cols="50" value={reviewText} onChange={(e) => setReviewText(e.target.value)}></textarea>
        </div>
      </div>
      <div className="button-container">
      <div className="buttons">
        <div classname="upload-container">
        <input type="file" id="uploadButton" name="uploadButton" accept="image/*" onChange={handleFileChange} />


        </div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
}


export default ReviewPage;