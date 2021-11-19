import "./featured.css";

import PropTypes from "prop-types";
 
import { FaPlay } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { CallToAction } from "../callToAction/callToAction";

export const FeaturedCard = (props) => {
  return (
    <div id="featuredContainer">
      <img
        id="featuredShowPhoto"
        src={props.featuredImage}
        alt="featured show picture"
      />
      <div id="featuredDescriptionContainer">
        <h1 id="Header">Community</h1>
        <p id="Description">
          A suspended lawyer is forced to enroll in a community college with an
          eccentric staff and student body.
        </p>
        <div id="CTAcontainer">
          <CallToAction type="Primary" name="Play" icon={<FaPlay />} hasIcon path="/home"/>
          <CallToAction
            type="Secondary"
            name="More Information"
            icon={<FaInfoCircle />}
            hasIcon
            path="/home"
          />
        </div>
      </div>
    </div>
  );
};

FeaturedCard.propTypes = {
  featuredImage: PropTypes.string.isRequired
}
