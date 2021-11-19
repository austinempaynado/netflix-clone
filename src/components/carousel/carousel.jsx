import "./carousel.css";
import { MovieCard } from "../movie-card/movie-card";
import PropTypes from "prop-types";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const MovieCarousel = (props) => {
  const { label, genre, thumbnail } = props;
  return (
    <div id="carousel">
      <h1 id="label-text">{label}</h1>
      <div id="movie-card-row">
        <div id="chevron-left" className="chevrons">
          <FaChevronLeft />
        </div>
        <MovieCard genre={genre} thumbnail={thumbnail} />
        <MovieCard genre={genre} thumbnail={thumbnail} />
        <MovieCard genre={genre} thumbnail={thumbnail} />
        <MovieCard genre={genre} thumbnail={thumbnail} />
        <MovieCard genre={genre} thumbnail={thumbnail} />
        <MovieCard genre={genre} thumbnail={thumbnail}/>
        <div id="chevron-right" className="chevrons">
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

MovieCarousel.propTypes = {
  label: PropTypes.string,
  genre: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
