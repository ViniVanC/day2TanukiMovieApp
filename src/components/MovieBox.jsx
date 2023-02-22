import React from "react";
import { FaStar } from "react-icons/fa";
import { MovieSearch } from "./MovieSearch";
import { NotMovie } from "./NotMovie";

const Poster = ({ src }) => {
  return (
    <div className="movie-info__img">
      <img src={src} alt="poster" />
    </div>
  );
};

const InfoList = ({ movie }) => {
  return (
    <ul className="info-list">
      <li>{movie?.Rated}</li>
      <li>{movie?.Year}</li>
      <li>{movie?.Runtime}</li>
      <li>{movie?.Country}</li>
    </ul>
  );
};

const GenreList = ({ genre }) => {
  return (
    <ul className="genre-list">
      {genre?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

const TextBox = ({ title, text }) => {
  return (
    <div className="movie-info__text-box">
      <h3>{title}:</h3>
      <p>{text}</p>
    </div>
  );
};

export const MovieBox = ({
  movie,
  search,
  open,
  notMovie,
  handleSubmit,
  handleChange,
}) => {
  let genre = movie?.Genre.split(",");

  return (
    <div className="movie-box">
      <MovieSearch
        handleSubmit={handleSubmit}
        search={search}
        handleChange={handleChange}
      />
      {notMovie ? (
        <NotMovie />
      ) : (
        <div className={`movie-info ${open && "open"}`}>
          <div className="movie-info__header">
            <Poster src={movie?.Poster} />
            <div className="movie-info__description">
              <h1>{movie?.Title}</h1>
              <div className="rate">
                <FaStar className="star" /> {movie?.imdbRating}
              </div>
              <InfoList movie={movie} />
              <GenreList genre={genre} />
            </div>
          </div>
          <div className="movie-info__footer">
            <TextBox title={"Plot"} text={movie?.Plot} />
            <TextBox title={"Cast"} text={movie?.Actors} />
          </div>
        </div>
      )}
    </div>
  );
};
