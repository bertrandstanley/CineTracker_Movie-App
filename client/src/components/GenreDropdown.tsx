import React, { useState } from 'react';

interface GenreDropdownProps {
  onGenreChange: (genre: number | null) => void;
  type: 'movie' | 'tv';
}

const GenreDropdown: React.FC<GenreDropdownProps> = ({ onGenreChange, type }) => {
  // List of movie genres from TMDB
  const movieGenres = [
    { name: "Action", id: 28 },
    { name: "Adventure", id: 12 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Fantasy", id: 14 },
    { name: "History", id: 36 },
    { name: "Horror", id: 27 },
    { name: "Music", id: 10402 },
    { name: "Mystery", id: 9648 },
    { name: "Romance", id: 10749 },
    { name: "Science Fiction", id: 878 },
    { name: "TV Movie", id: 10770 },
    { name: "Thriller", id: 53 },
    { name: "War", id: 10752 },
    { name: "Western", id: 37 },
  ];

  // List of TV genres from TMDB
  const tvGenres = [
    { name: "Action & Adventure", id: 10759 },
    { name: "Animation", id: 16 },
    { name: "Comedy", id: 35 },
    { name: "Crime", id: 80 },
    { name: "Documentary", id: 99 },
    { name: "Drama", id: 18 },
    { name: "Family", id: 10751 },
    { name: "Kids", id: 10762 },
    { name: "Mystery", id: 9648 },
    { name: "News", id: 10763 },
    { name: "Reality", id: 10764 },
    { name: "Sci-Fi & Fantasy", id: 10765 },
    { name: "Soap", id: 10766 },
    { name: "Talk", id: 10767 },
    { name: "War & Politics", id: 10768 },
    { name: "Western", id: 37 },
  ];

  // Choose the appropriate list based on the type prop
  const genres = type === 'movie' ? movieGenres : tvGenres;

  // State to hold the currently selected genre name (for button display)
  const [selectedGenre, setSelectedGenre] = useState<string>("Genre");

  const handleGenreSelect = (
    event: React.MouseEvent,
    genreId: number,
    genreName: string
  ) => {
    event.preventDefault();
    setSelectedGenre(genreName); // Update button text with the selected genre name
    onGenreChange(genreId); // Notify parent with the numeric genre ID
  };

  const handleReset = (event: React.MouseEvent) => {
    event.preventDefault();
    setSelectedGenre("Genre"); // Reset button text
    onGenreChange(null); // Notify parent that selection is cleared
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle dropdown-button"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedGenre}
      </button>
      <ul className="dropdown-menu button-inside">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={handleReset}
          >
            Reset
          </a>
        </li>
        {genres.map((genre) => (
          <li key={genre.id}>
            <a
              className="dropdown-item  button-inside"
              href="#"
              onClick={(e) =>
                handleGenreSelect(e, genre.id, genre.name)
              }
            >
              {genre.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenreDropdown;
