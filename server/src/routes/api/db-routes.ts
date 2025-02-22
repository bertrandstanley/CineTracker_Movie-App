import express, { Request, Response } from 'express';
import { User } from '../../models/index.js';
import sequelize from '../../config/connection.js';
import { QueryTypes } from 'sequelize';

const router = express.Router();

// Helper: Convert a JavaScript number array to a PostgreSQL array literal string.
const toPgArray = (arr: number[]): string => `{${arr.join(',')}}`;

// INTERESTED POST: Add a movie to a user's watchlist using raw SQL queries.
export const interestedPost = async (req: Request, res: Response) => {
  try {
    const { UserID, MovieID } = req.body;
    
    const userTable = User.getTableName();
    
    // Fetch the user record using a raw SELECT query.
    const userRecords: any[] = await sequelize.query(
      `SELECT * FROM "${userTable}" WHERE "id" = :userId`,
      { replacements: { userId: UserID }, type: QueryTypes.SELECT }
    );
    if (userRecords.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const userRecord = userRecords[0];
    
    // Get the current watchlist (ensuring it's an array).
    let currentWatchlist: number[] = userRecord.watchlist || [];
    if (!Array.isArray(currentWatchlist)) {
      // If stored as a string, try parsing it.
      currentWatchlist = JSON.parse(currentWatchlist);
    }
    
    // Update if the MovieID is not already included.
    if (!currentWatchlist.includes(MovieID)) {
      currentWatchlist.push(MovieID);
      const pgArray = toPgArray(currentWatchlist);
      
      // Use a raw UPDATE query to update the watchlist column.
      await sequelize.query(
        `UPDATE "${userTable}" SET "watchlist" = :watchlist::integer[] WHERE "id" = :userId`,
        { replacements: { watchlist: pgArray, userId: UserID } }
      );
    }
    
    res.status(200).json({ message: "Movie added to watchlist", watchlist: currentWatchlist });
    return res;
  } catch (error) {
    console.error("Error in interestedPost:", error);
    res.status(500).json({ error: "Server error" });
    return res;
  }
};

// WATCHED POST: Add a movie to a user's already_watched list using raw SQL queries.
export const watchedPost = async (req: Request, res: Response) => {
  try {
    const { UserID, MovieID } = req.body;
    console.log("watchedPost", UserID, MovieID);
    
    const userTable = User.getTableName();
    
    // Fetch the user record.
    const userRecords: any[] = await sequelize.query(
      `SELECT * FROM "${userTable}" WHERE "id" = :userId`,
      { replacements: { userId: UserID }, type: QueryTypes.SELECT }
    );
    if (userRecords.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const userRecord = userRecords[0];
    
    // Get the current already_watched list.
    let currentWatched: number[] = userRecord.already_watched || [];
    if (!Array.isArray(currentWatched)) {
      currentWatched = JSON.parse(currentWatched);
    }
    
    // Update if the MovieID is not already present.
    if (!currentWatched.includes(MovieID)) {
      currentWatched.push(MovieID);
      const pgArray = toPgArray(currentWatched);
      
      // Use a raw UPDATE query to update the already_watched column.
      await sequelize.query(
        `UPDATE "${userTable}" SET "already_watched" = :alreadyWatched::integer[] WHERE "id" = :userId`,
        { replacements: { alreadyWatched: pgArray, userId: UserID } }
      );
    }
    
    res.status(200).json({ message: "Movie added to already watched list", already_watched: currentWatched });
    return res;
  } catch (error) {
    console.error("Error in watchedPost:", error);
    res.status(500).json({ error: "Server error" });
    return res;
  }
};

// REVIEW POST: Save a review for a movie using a raw INSERT query.
export const reviewPost = async (req: Request, res: Response) => {
  try {
    const { UserID, MovieID, review_text } = req.body;
    
    // Assuming the reviews table is named "reviews".
    const reviewTable = 'reviews';
    // Insert the review and return the inserted row.
    const [insertResults]: any[] = await sequelize.query(
      `INSERT INTO "${reviewTable}" ("user_id", "movie_id", "review_text", "createdAt", "updatedAt")
       VALUES (:userId, :movieId, :reviewText, NOW(), NOW())
       RETURNING *;`,
      { replacements: { userId: UserID, movieId: MovieID, reviewText: review_text } }
    );
    
    res.status(200).json({ message: "Review saved", review: insertResults[0] });
    return res;
  } catch (error) {
    console.error("Error in reviewPost:", error);
    res.status(500).json({ error: "Server error" });
    return res;
  }
};

// REVIEW FETCH: Fetch all reviews for a given movie using a raw SELECT query with a join.
export const reviewFetch = async (req: Request, res: Response) => {
  try {
    const { MovieID } = req.body;
    
    // Define table names.
    const reviewTable = 'reviews';
    const userTable = User.getTableName();
    // Join reviews with user data.
    const query = `
      SELECT r.*, u."username", u."email"
      FROM "${reviewTable}" r
      JOIN "${userTable}" u ON r."user_id" = u."id"
      WHERE r."movie_id" = :movieId;
    `;
    const reviews: any[] = await sequelize.query(query, {
      replacements: { movieId: MovieID },
      type: QueryTypes.SELECT
    });
    res.status(200).json({ reviews });
    return res;
  } catch (error) {
    console.error("Error in reviewFetch:", error);
    res.status(500).json({ error: "Server error" });
    return res;
  }
};

// LIBRARY FETCH: Fetch a user's library (watchlist and already_watched) using a raw SELECT query.
export const libraryFetch = async (req: Request, res: Response) => {
  try {
    const { UserID } = req.body;
    console.log("libraryFetch", UserID);
    
    const userTable = User.getTableName();
    const userRecords: any[] = await sequelize.query(
      `SELECT "watchlist", "already_watched" FROM "${userTable}" WHERE "id" = :userId`,
      { replacements: { userId: UserID }, type: QueryTypes.SELECT }
    );
    if (userRecords.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }
    const userData = userRecords[0];
    
    res.json(userData);
    return res;
  } catch (error) {
    console.error("Error in libraryFetch:", error);
    res.status(500).json({ error: "Server error" });
    return res;
  }
};

router.post('/interested', interestedPost);
router.post('/watched', watchedPost);
router.post('/review', reviewPost);
router.post('/fetchreviews', reviewFetch);
router.post('/fetchlibrary', libraryFetch);

export { router as dbRouter };
