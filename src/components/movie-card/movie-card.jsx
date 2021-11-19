import "./movie-card.css";
import PropTypes from "prop-types";
import { useState } from "react";

//assets
import Thumbnail from "../../constants/images/communityThumbnail.jpg";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { IconButton } from "../iconButton/iconButton";

export const MovieCard = (props) => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [delayHandler, setDelayHandler] = useState(null);
  const { name, genre, thumbnail } = props;

  const mouseEnterHandler = (event) => {
    setDelayHandler(
      setTimeout(() => {
        setIsPreviewMode(true);
      }, 500)
    );
  };

  const mouseLeaveHandler = () => {
    setIsPreviewMode(false);
    clearTimeout(delayHandler);
  };

  return (
    <div
      id="card"
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {isPreviewMode ? (
        <div id="movie-card-container">
          <img className="movie-photo" src={thumbnail} alt={name + "image"} />
          <div id="button-container">
            <IconButton icon={<FaPlay />} type="Primary" />
            <IconButton icon={<FaPlus />} type="Secondary" />
            <IconButton icon={<FaThumbsUp />} type="Secondary" />
            <IconButton icon={<FaThumbsDown />} type="Secondary" />
            <div id="movie-info-container">
              <IconButton icon={<FaAngleDown />} type="Secondary" />
            </div>
          </div>
          <p className="details">{genre}</p>
        </div>
      ) : (
        <div>
          <img className="movie-photo" src={thumbnail} alt={"movie-image"} />
        </div>
      )}
    </div>
  );
};

MovieCard.propTypes = {
  name: PropTypes.string,
  genre: PropTypes.string,
  thumbnail: PropTypes.string,
};
