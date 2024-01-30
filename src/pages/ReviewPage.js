import '../pages/ReviewPage.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import reactLogo from "../assets/images/dorms.jpg";
import reactLogo2 from "../assets/images/door.jpg";
import reactLogo3 from "../assets/images/lr1.jpg";
import reactLogo4 from "../assets/images/uvb.jpg";
import reactLogo5 from "../assets/images/dust.jpg";


const ReviewPage = () => {
  

  return (
    <div className="review-page">


      <div className="sidebar">
        <div className="overall-rating">
          <h2>Overall Rating</h2>
          <p>4.1 <FontAwesomeIcon icon={faStar} /> </p>
          <h4>Cleanliness</h4>
          <p1>3.7 <FontAwesomeIcon icon={faStar} /> </p1>
          <h4>Location</h4>
          <p1>3.8 <FontAwesomeIcon icon={faStar} /> </p1>
          <h4>Building</h4>
          <p1>4.7 <FontAwesomeIcon icon={faStar} /> </p1>
          <h4>Condition</h4>
          <p1>4.2 <FontAwesomeIcon icon={faStar} /> </p1>
        </div>
      </div>


      <div className="title">
      <h1>University Village Housing (UV)</h1>
    </div>

      <div className="main-content">
        <div className="review-box">
          <div className='overall-info'>
            <h3>Rating</h3>
            <p>3.75 <FontAwesomeIcon icon={faStar} /> </p>
          </div>
          <div className="review-info">
            <h3>1 Week Ago</h3>
            <p>I have lived in UV for the past 2 years. The floor plan I decided to 
            go with was the 1x1D located in phase 2. Compared to the other 
            1x1 models, this one is the largest and definitely worth the extra 
            money if you value space.</p>
          </div>
          <div className="category-box">
            <h3>Cleanliness <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Location <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Building  <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Condition <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
          </div>
          <div className='picOne'>
            <img src={reactLogo} alt="Dorms" className='rOne'/>
          </div>
          <div className='picTwo'>
            <img src={reactLogo2} alt="Dorms" className='rTwo'/>
          </div>
        </div>
      </div>

      <div className='review-page-two'>
        <div className='main-content-two'>
          <div className='review-box-two'>
          <div className='overall-info-two'>
            <h3>Rating</h3>
            <p>4.5 <FontAwesomeIcon icon={faStar} /> </p>
          </div>
          <div className="review-info-two">
            <h3>3 Weeks Ago</h3>
            <p>This was my first year living in this apartment and the day I 
              moved in there was a dead cockroach in the bathroom cabinet. It didn't
              seem very clean however everything did work so no work orders needed to be 
              placed. If you do plan on moving into the UV apartments I would 
              suggest you move into the newer phases instead. 
            </p>
          </div>

          <div className="category-box-two">
            <h3>Cleanliness <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Location <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Building <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Condition <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
          </div>

          <div className='picFour'>
            <img src={reactLogo4} alt="Dorms" className='rFour'/>
          </div>
          <div className='picFive'>
            <img src={reactLogo5} alt="Dorms" className='rFive'/>
          </div>
        </div>

      </div>

          </div>

      <div className='review-page-three'>
        <div className='main-content-two'>
          <div className='review-box-three'>
          <div className='overall-info-two'>
            <h3>Rating</h3>
            <p>2.75 <FontAwesomeIcon icon={faStar} /> </p>
          </div>
          <div className="review-info-two">
            <h3>2 Months Ago</h3>
            <p>I have lived in UV for the past 2 years. The floor plan I decided to 
            go with was the 1x1 located in phase 2. Compared to the other
            models, this one is the largest and definitely worth the extra 
            money if you value space. It wasn't very clean when we moved in however
            everything seemed to be working fine. We did have to put a few work
            orders in for the washing machine since it stopped working. Overall, I think
            this apartment could have been better.</p>
          </div>

          <div className="category-box-two">
            <h3>Cleanliness <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Location <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Building <FontAwesomeIcon icon={faStar} /> </h3>
            <h3>Condition <FontAwesomeIcon icon={faStar} /></h3>
          </div>
          
          <div className='picThree'>
            <img src={reactLogo3} alt="Dorms" className='rThree'/>
          </div>
        </div>

      </div>

          </div>

          <div className='review-page-four'>
        <div className='main-content-two'>
          <div className='review-box-four'>
          <div className='overall-info-two'>
            <h3>Rating</h3>
            <p>4.25 <FontAwesomeIcon icon={faStar} /> </p>
          </div>
          <div className="review-info-two">
            <h3>2 Months Ago</h3>
            <p>I have lived in UV for a year and my floor plan is the 
            4x2 located in phase 6. Compared to the other
            models, the bedrooms in this floorplan are quite smaller
            but definetly bigger than the dorms bedrooms. 
            It was kind of clean when we moved in but still dusty in
            the living room. We didn't have to put any work orders but we 
            did to have a deep clean as soon as we moved in.</p>
          </div>

          <div className="category-box-two">
            <h3>Cleanliness <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Location <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Building <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
            <h3>Condition <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /></h3>
          </div>
        </div>

      </div>

          </div>


          <div className='review-page-five'>
        <div className='main-content-five'>
          <div className='review-box-five'>
          <div className="review-info-two">
            <h6>Work Orders</h6>
            <h4>2021-2022</h4>
            

            <ul id="dropdown-menu">
    <li>Phase 1
        <ul class="submenu">
            <li>Total work orders: 59</li>
            <li>Bathroom work orders: 12</li>
            <li>Bedroom work orders: 3</li>
            <li>Kitchen work orders: 40</li>
            <li>Living room work orders: 4</li>
            <li>Emergency work orders: 8</li>
        </ul>
    </li>
    <li>Phase 2
        <ul class="submenu">
        <li>Total work orders: 35</li>
            <li>Bathroom work orders: 10</li>
            <li>Bedroom work orders: 1</li>
            <li>Kitchen work orders: 20</li>
            <li>Living room work orders: 4</li>
            <li>Emergency work orders: 8</li>
        </ul>
    </li>

    <li>Phase 3
        <ul class="submenu">
            <li>Total work orders: 32</li>
            <li>Bathroom work orders: 15</li>
            <li>Bedroom work orders: 2</li>
            <li>Kitchen work orders: 12</li>
            <li>Living room work orders: 3</li>
            <li>Emergency work orders: 2</li>
        </ul>
    </li>

    <li>Phase 4
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 5
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 6
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 7
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 8
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 9
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>
</ul>


    <div className="review-info-three">
            <h4>2020-2021</h4>

            <ul id="dropdown-menu">
            <li>Phase 1
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 2
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 3
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 4
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 5
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 6
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 7
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 8
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>

    <li>Phase 9
        <ul class="submenu">
            <li>Total work orders: </li>
            <li>Bathroom work orders:</li>
            <li>Bedroom work orders:</li>
            <li>Kitchen work orders:</li>
            <li>Living room work orders:</li>
            <li>Emergency work orders:</li>
        </ul>
    </li>
</ul>

        </div>
        </div>
        </div>
</div>
</div>
</div>
  );
};

export default ReviewPage;
