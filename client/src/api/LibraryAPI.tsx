// apiService.ts

interface ApiResponse<T = any> {
    message?: string;
    error?: string;
    data?: T;
  }
  
  // Adds a movie to the user's interested list (watchlist)
  async function addInterested(userID: number, movieID: number): Promise<ApiResponse> {
    const response = await fetch('/api/db/interested', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ UserID: userID, MovieID: movieID })
    });
    return response.json();
  }
  
  // Adds a movie to the user's watched list
  async function addWatched(userID: number, movieID: number): Promise<ApiResponse> {
    const response = await fetch('/api/db/watched', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ UserID: userID, MovieID: movieID })
    });
    return response.json();
  }
  
  // Posts a review for a movie
async function postReview(userID: number, movieID: number, reviewText: string): Promise<ApiResponse> {
    const response = await fetch('/api/db/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ UserID: userID, MovieID: movieID, Review: reviewText })
    });
    return response.json();
  }
  
  // Fetches all reviews for a given movie
  async function fetchReviews(movieID: number): Promise<ApiResponse> {
    const response = await fetch('/api/db/fetchreviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ MovieID: movieID })
    });
    return response.json();
  }
  
  // Fetches all movies (or review entries) in a user's library
  async function fetchLibrary(userID: number): Promise<ApiResponse> {
    const response = await fetch('/api/db/fetchlibrary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ UserID: userID })
    });
    return response.json();
  }
  
  export { addInterested, addWatched, postReview, fetchReviews, fetchLibrary };