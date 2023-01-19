import { record } from 'rrweb';
import { ReactComponent as Rating } from './assets/rating.svg';
import { useState } from 'react';

import './Record.css'

const Record = () => {

  let events = [];

  const [rating, setRating] = useState(-1);

  const toggleHover = (rating) => {
    console.log("rating:", rating);
    setRating(rating);
  }

  record({
    emit(event) {
      // push event into the events array
      events.push(event);
      // setEvents(events);
    },
  });

  // this function will send events to the backend and reset the events array
  const save = () => {
    console.log("events in save::", events);
    let ncwbScript = document.querySelector('script[data-ncwb-id="ncwb"]');
    let userId = ncwbScript.getAttribute('data-user-id');
    let websiteId = ncwbScript.getAttribute('data-website-id');
    const body = {
      activityType: 'FEEDBACK',
      userId,
      websiteId,
      activityEvents: events,
      rating,
      comment: ''
    };
    events = [];
    fetch('http://localhost:8080/feedback-activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }

  const handleRating = () => {
    save();
  }

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