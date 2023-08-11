import { ReactComponent as Rating } from './assets/rating.svg';
import { useEffect, useState } from 'react';
import { listenToErrorsAndSave, save, saveComment, update } from './Record.Save.Service';
import { startRecordingEvents } from './Record.RRweb-Record.Service';

import './Record.css';

const Record = () => {

  const [rating, setRating] = useState(-1);
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);
  const [showRating, setShowRating] = useState(true);
  const [showTY, setShowTY] = useState(false);

  const toggleHover = (rating) => {
    setRating(rating);
  }

  const handleRating = () => {
    save(rating)
    .then(res => {
      setShowComment(true);
      setShowRating(false);
      setShowTY(false);
    })
    .catch(err => {
    });
  }

  useEffect(() => {
    startRecordingEvents();
    let intervalFn;
    let timeoutFn = setTimeout(() => {
      save(4)
      .then(res => {
        setInterval(() => {
          intervalFn = update(res.activityEventsUrl)
          .then(res => {
          })
          .catch(err => {
          });
        }, 3000);
      })
      .catch(err => {
      });
    }, 2000);

    return () => {
      timeoutFn.clearTimeout();

    }
  }, []);

  useEffect(() => {
    startRecordingEvents();
    let intervalFn;
    let timeoutFn = setTimeout(() => {
      save(4)
      .then(res => {
        if (res.status === "ok") {
          intervalFn = setInterval(() => {
            update(res.activityEventsUrl)
            .then(res => {
              // Check if the status is not 200 and clear the interval
              if (res.status === "ok") {
                clearInterval(intervalFn);
              }
            })
            .catch(err => {
              clearInterval(intervalFn); // Clear interval on error
            });
          }, 2000);
        }
      })
      .catch(err => {
      });
    }, 1000);

    return () => {
      clearTimeout(timeoutFn);
      clearInterval(intervalFn);
    }
}, []);


  const getRatingStyles = (index) => {
    return (
      rating >= index &&
      rating !== -1
    ) ? {
      fill: process.env.REACT_APP_ACTIVE_RATING_COLOR
    } : {}
  }

  const handleCommenChange = (event) => {
    setComment(event.target.value);
    saveComment(event.target.value);
  }

  const handleSubmit = (event) => {
    setShowTY(true);
    setShowComment(false);
    setShowRating(false);
  }

  return <>
    {/* <div className="rating-container">
      {
        Array(5).fill().map((item, index) => {
          return <div 
            className="rating-icon" 
            key={index}
            onClick={() => handleRating()}
          >
            {
              showRating && <Rating
                className="rating"
                style={getRatingStyles(index)}
                onMouseEnter={() => toggleHover(index)}
                onMouseLeave={() => toggleHover(-1)}
              />
            }
          </div>
        })
      }
      {
        showComment &&
        <div className='comment-container'>
          <textarea 
            onChange={handleCommenChange}
            rows="8"
            className="ncwb-comment"
          ></textarea>
          <button onClick={handleSubmit} className="submit-btn">Submit</button>
        </div>
      }

      {
        showTY && 
        <div className='tyf-container'>Thanks for your feedback!</div>
      }
    </div> */}
  </>

}

export default Record;