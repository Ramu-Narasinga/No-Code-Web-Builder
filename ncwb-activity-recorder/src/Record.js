import { ReactComponent as Rating } from './assets/rating.svg';
import { useEffect, useState } from 'react';
import { save } from './Record.Save.Service';
import { startRecordingEvents } from './Record.RRweb-Record.Service';

import './Record.css';

const Record = () => {

  const [rating, setRating] = useState(-1);

  const toggleHover = (rating) => {
    // console.log("rating:", rating);
    setRating(rating);
  }  

  const handleRating = () => {
    save(rating, '');
    console.log(getRatingStyles(rating))
  }

  useEffect(() => {
    startRecordingEvents();
  }, []);

  const getRatingStyles = (index) => {
    return (
      rating >= index && 
      rating != -1
    ) ? {
      fill: process.env.REACT_APP_ACTIVE_RATING_COLOR
    } : {}
  }

  return <>
    <div className="rating-container">
      {
        Array(5).fill().map((item, index) => {
          return <div className="rating-icon">
            <Rating 
              className={
                (
                  rating >= index && 
                  rating != -1
                )  ? 'active-rating' : 'rating'}
              style={getRatingStyles(index)}
              onMouseEnter={() => toggleHover(index)}
              onMouseLeave={() => toggleHover(-1)}
              onClick={() => handleRating()}
            />
          </div>
        })
      }
    </div>
  </>

}

export default Record;