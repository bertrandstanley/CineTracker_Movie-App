import express, { Request, Response } from 'express';

const router = express.Router();

export const detailsFetch = async (req: Request, res: Response) => {

    const api_key = process.env.TMDB_API_KEY;

    const { MovieID: movieID = "" } = req.body;

    const base_url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}&language=en-US`;
    const response = await fetch(base_url);
    const data = await response.json();
    res.json(data);

    console.log(req.body);
    return res;
};

export const trailerFetch = async (req: Request, res: Response) => {
    try {
        const youtubeApiKey = process.env.YOUTUBE_API_KEY;
        if (!youtubeApiKey) {
          return res.status(500).json({ error: "YouTube API key is not configured." });
        }
    
        // Extract the movie title from the request body.
        const { title = "" } = req.body;
        if (!title) {
          return res.status(400).json({ error: "No title provided" });
        }
    
        // Build the search query: movie title plus the word "trailer"
        const query = `${title} trailer`;
        const youtubeSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&q=${encodeURIComponent(query)}&key=${youtubeApiKey}`;
    
        // Fetch data from the YouTube API
        const response = await fetch(youtubeSearchUrl);
        const data = await response.json();
    
        // Check if we got a valid video item in the response
        if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
          return res.json({ videoLink });
        } else {
          return res.status(404).json({ error: "Trailer not found." });
        }
      } catch (err) {
        console.error("Error fetching trailer:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
}

router.post('/fetch', detailsFetch);
router.post('/yt', trailerFetch);

export { router as detailsRouter };