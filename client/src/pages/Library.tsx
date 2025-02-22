import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import { getDetailPosters } from "../api/DetailPostersAPI";
import { fetchLibrary } from "../api/LibraryAPI";
import CardSection from "../components/Cards";

// Response interface for fetching library data
interface LibraryResponse {
  watchlist: number[];
  already_watched: number[];
}

// Define an interface for the card data (adjust fields as needed)
interface CardData {
  id: number;
  title: string;
  posterUrl: string;
  // additional fields if needed
}

const Library: React.FC = () => {
  const navigate = useNavigate();

  // New state variables for card data
  const [watchlistCards, setWatchlistCards] = useState<CardData[]>([]);
  const [watchedCards, setWatchedCards] = useState<CardData[]>([]);

  useEffect(() => {
    // Check if user is logged in. If not, redirect to login page.
    if (!Auth.loggedIn()) {
      alert("You must be logged in to access your library!");
      navigate("/login");
      return;
    }

    const fetchData = async () => {
      const userID = parseInt(Auth.getUserID() as string);

      if (!userID) {
        console.error("User ID not found.");
        return;
      }

      try {
        // Fetch the library data from the API response
        const result = await fetchLibrary(userID) as LibraryResponse;
        console.log("Library data:", result);
        // For each movie ID in the watchlist, fetch its detailed card data.
        const watchlistCardsData: CardData[] = await Promise.all(
          result.watchlist.map(async (movieId) => {
            // Adjust according to your API's response structure
            const data = await getDetailPosters(movieId);
            return data as CardData;
          })
        );
        setWatchlistCards(watchlistCardsData? watchlistCardsData : []);

        // For each movie ID in the watched array, fetch its detailed card data.
        const watchedCardsData: CardData[] = await Promise.all(
          result.already_watched.map(async (movieId) => {
            // Adjust according to your API's response structure
            const data = await getDetailPosters(movieId);
            return data as CardData;
          })
        );
        setWatchedCards(watchedCardsData? watchedCardsData : []);

      } catch (error) {
        console.error("Error fetching library data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="nonwide-container">
      <div>
        <h1>WatchList</h1>
        <div className="lib-card-parent-container">
          {watchlistCards.map((card, index) => (
            <CardSection {...card} key={index} />
          ))}
          </div>
      </div>
      <div>
        <h1>Already Watched</h1>
        <div className="lib-card-parent-container">
          {watchedCards.map((card, index) => (
            <CardSection {...card} key={index} />
          ))}
          </div>
      </div>
    </div>
  );
};

export default Library;
