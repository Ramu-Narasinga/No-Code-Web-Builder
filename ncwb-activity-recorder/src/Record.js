import { ReactComponent as Rating } from './assets/rating.svg';
import { useEffect, useState } from 'react';
import { save } from './Record.Save.Service';
import { startRecordingEvents } from './Record.RRweb-Record.Service';

import './Record.css';

const Record = () => {

  const [rating, setRating] = useState(-1);

  const toggleHover = (rating) => {
    console.log("rating:", rating);
    setRating(rating);
  }  

  const handleRating = () => {
    save(rating, comment, events);
  }

  useEffect(() => {
    startRecordingEvents();
  }, []);

  return <>
    <div className="rating-container">
      {
        Array(5).fill().map((item, index) => {
          return <div className="rating-icon">
            <Rating 
              className={rating ? 'active-rating' : 'rating'}
              onMouseEnter={() => toggleHover(index)}
              onMouseLeave={() => toggleHover(index)}
              onClick={() => handleRating()}
            />
          </div>
        })
      }
    </div>
  </>

}

export default Record;