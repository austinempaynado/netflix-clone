import { PropTypes } from "prop-types";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./callToAction.css";



export const CallToAction = (props) => {
  const { name, icon, type, color, hasIcon, path} = props;
  const [isIconic, setIsIcon] = useState(true);

  const history = useHistory();

  return (
    <div id="buttonContainer">
      {isIconic ? (
        <button onClick={()=>{history.push(`${path}`)}}id="callToAction" className={`${type} ${color}`}>
          {hasIcon && <div className="callToActionContent">{icon}</div>}
          <div className="callToActionContent">{name}</div>
        </button>
      ) : (
        <button id="callToAction" className={type}>
          <div className="callToActionContent">{name}</div>
        </button>
      )}
    </div>
  );
};

CallToAction.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.element,
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  hasIcon: PropTypes.bool,
  path: PropTypes.string
};
