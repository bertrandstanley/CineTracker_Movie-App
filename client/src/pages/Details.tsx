import React, { useEffect, useState } from 'react';
import '../styles/details.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getDetails } from '../api/detailsAPI';
import { CardDetails } from '../interfaces/CardDetails';
import Auth from '../utils/auth';
import { addInterested, addWatched, postReview } from '../api/LibraryAPI';


const Jumbotron: React.FC<{ id: number }> = ({ id }) => {
  const poster_url = "https://image.tmdb.org/t/p/original";
  const [cardDetails, setDetails] = useState<CardDetails>({});

  // Handler: Add movie to watchlist
  const handleAddToWatchlist = async () => {
    const userID = Auth.getUserID();
    if (!userID) {
      alert("User not logged in!");
      return;
    }
    try {
      const result = await addInterested(parseInt(userID), id);
      if (result.error) {
        alert(result.error);
      } else {
        alert("Added to watchlist!");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding movie to watchlist.");
    }
  };

  // Handler: Mark movie as watched
  const handleMarkAsWatched = async () => {
    const userID = Auth.getUserID();
    if (!userID) {
      alert("User not logged in!");
      return;
    }
    try {
      const result = await addWatched(parseInt(userID), id);
      if (result.error) {
        alert(result.error);
      } else {
        alert("Movie marked as watched!");
      }
    } catch (error) {
      console.error(error);
      alert("Error marking movie as watched.");
    }
  };

  // Handler: Submit a review via a prompt
  const handleAddReview = async () => {
    const userID = Auth.getUserID();
    if (!userID) {
      alert("User not logged in!");
      return;
    }
    const reviewText = prompt("Enter your review:");
    if (reviewText && reviewText.trim() !== "") {
      try {
        const result = await postReview(parseInt(userID), id, reviewText);
        if (result.error) {
          alert(result.error);
        } else {
          alert("Review submitted!");
        }
      } catch (error) {
        console.error(error);
        alert("Error submitting review.");
      }
    } else {
      alert("Review cannot be empty.");
    }
  };

  // Handler: Open the YouTube trailer (dummy implementation)
  const handleYoutubeTrailer = () => {
    // You can replace this with a call to an API that returns the trailer URL.
    const trailerUrl = cardDetails?.TrailerLink;
    window.open(trailerUrl, "_blank");
  };

  useEffect(() => {
    // Fetch movie details on mount.
    getDetails({ MovieID: id })
      .then((data) => {
        setDetails(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div 
      className="parent-container" 
      style={{
        backgroundImage: `url(${poster_url + cardDetails.BackdropLink})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: 'calc(100vh - 100px)',
        width: '100%',
        position: 'relative',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      }}
    >
      <div className="d-flex justify-content-between text-details" style={{ width: '100%' }}>
        {/* Left side for movie details */}
        <div className="left-side" style={{ flex: 1, paddingRight: '2rem' }}>
          <div className="black-overlay-box">
            <div className="details-holder">
              <div className="movie-title" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {cardDetails?.Title}
              </div>
              <div className="movie-overview" style={{ fontStyle: 'italic', marginTop: '1rem' }}>
                {cardDetails?.Overview}
              </div>
              <div className="movie-year" style={{ marginTop: '1rem', fontSize: '1.1rem' }}>
                {cardDetails?.Year}
              </div>
              <div className="button-group" style={{ marginTop: '1rem' }}>
              <button 
                  className="btn btn-outline-secondary button-spacing details-button" 
                  type="button"
                  onClick={handleAddToWatchlist}
                >
                  Add To Watchlist
                </button>
                <button 
                  className="btn btn-outline-secondary button-spacing details-button" 
                  type="button"
                  onClick={handleMarkAsWatched}
                >
                  Watch already
                </button>
                <button 
                  className="btn btn-outline-secondary button-spacing details-button" 
                  type="button"
                  onClick={handleAddReview}
                >
                  Add Review
                </button>
                <button 
                  className="btn btn-outline-secondary details-button" 
                  type="button"
                  onClick={handleYoutubeTrailer}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
</svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right side for reviews */}
        <div className="right-side" style={{ flex: 1, padding: '1rem' }}>
          <div className="review-container">
            <div className="details-holder">
              <div>
                <h2>Reviews</h2>
                <p className="italic-text">
                  "I’m a big fan of Superman, and I’ve been waiting for this movie for so long. After just watching the trailer, I can already tell that this movie is going to be a hit. I’m so excited to watch it!"
                </p>
                <h4><strong>Stanley B.</strong></h4>
                <button className="btn btn-outline-secondary" type="button">
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
