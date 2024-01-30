import React, { useState } from 'react';
import '../pages/BuildingReviewForm.css';


function BuildingReviewForm() {
const [cleanliness, setCleanliness] = useState(0);
const [condition, setCondition] = useState(0);
const [buildingRating, setBuildingRating] = useState(0);
const [location, setLocation] = useState(0);
const [review, setReview] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
// Handle the submit action here, such as sending data to a server
console.log({
cleanliness,
condition,
buildingRating,
location,
review,
});
};

return (
<header>
<form onSubmit={handleSubmit} className="reviewform">
<label className="reviewform">
Select building
<select>
{/* Options would be populated here */}
</select>
</label><label>
    Rate the cleanliness
    <input type="range" min="0" max="5" value={cleanliness} onChange={(e) => setCleanliness(e.target.value)} className="reviewform"/>
    <span >{cleanliness}</span>
</label>

<label className="reviewform">
    Rate the condition
    <input type="range" min="0" max="5" value={condition} onChange={(e) => setCondition(e.target.value)} className="reviewform"/>
    <span>{condition}</span>
</label>

<label className="reviewform">
    Rate the building
    <input type="range" min="0" max="5" value={buildingRating} onChange={(e) => setBuildingRating(e.target.value)} className="reviewform"/>
    <span>{buildingRating}</span>
</label>

<label className="reviewform">
    Rate the location
    <input type="range" min="0" max="5" value={location} onChange={(e) => setLocation(e.target.value)} className="reviewform"/>
    <span>{location}</span>
</label>

<label className="reviewform">
                Write a review
                <textarea className="reviewform"
                    value={review} 
                    onChange={(e) => setReview(e.target.value)}
                    placeholder="Type your review here"
                ></textarea>
            </label>

<button type="Photos" style={{ marginRight: '10px' }} className="reviewform">Photos</button>

<button type="submit" className="reviewform">Submit</button>
</form>
</header>

);
}

export default BuildingReviewForm;
 