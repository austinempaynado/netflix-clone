import { PropTypes } from "prop-types";
import "./showcase.css"

export const Showcase = (props) => {
  return (
    <div className="showcase-container" id={props.flipped ? "flipped": ""}>
      <div id="showcase-content">
        <h1 className="showcase-label">{props.label}</h1>
        <p id="showcase-text">{props.text}</p>
      </div>
        <img src={props.image} />
    </div>
  );
};

Showcase.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  flipped: PropTypes.bool
};
