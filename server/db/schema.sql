-- Drop dependent tables first to avoid foreign key conflicts
DROP TABLE IF EXISTS user_library;
DROP TABLE IF EXISTS movie;
DROP TABLE IF EXISTS users;

-- Create the users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  watchlist numarray[] DEFAULT '{}',
  already_watched numarray[] DEFAULT '{}',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create the movie table
CREATE TABLE movie (
  id SERIAL PRIMARY KEY,
  movie_id VARCHAR(255) UNIQUE NOT NULL -- Stores tmdb movie/TV show ID
);

-- Create the user_library table (watchlist)
CREATE TABLE review (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  movie_id INT REFERENCES movie(id) ON DELETE CASCADE,
  review TEXT
);
