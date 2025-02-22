import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/cards.css";
import { CardData } from "../interfaces/CardData";

const CardSection: React.FC<CardData> = (props) => {
  const poster_url = "https://image.tmdb.org/t/p/w500" + props.Poster;
  return (
    <div className="movie-container-card row row-cols-1 row-cols-lg-3 align-items-stretch g-4">
      <div className="col-12 col-md-3">
        <Link to={`/details/` + props.MovieID} className="text-decoration-none">
          <div
            className="card movie-card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${poster_url})` }} // Replace with your image URL or placeholder
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <ul className="d-flex list-unstyled mt-auto">
                <li className="me-auto"></li>
              </ul>
            </div>
          </div>
        </Link>
      </div >
    </div >
  );
};

export default CardSection;
