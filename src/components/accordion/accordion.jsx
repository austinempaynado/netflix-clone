import "./accordion.css";
import { PropTypes } from "prop-types";
import { FaPlus } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";
export const Accordion = (props) => {
  const { label, text } = props;

  const [isOpen, setOpen] = useState(false);
  return (
    <div
      id="accordion-container"
      onClick={() => {
        setOpen((currentState) => !currentState);
      }}
    >
      {isOpen ? (
        <div>
          <div id="accordion-content">
            <h2 id="accorion-label">{label}</h2>
            <div id="accordion-right-side">
              <FaWindowClose />
            </div>
          </div>
          <div id="accordion-preview">
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div id="closed-state">
          <div id="accordion-content">
            <h2 id="accorion-label">{label}</h2>
            <div id="accordion-right-side">
              <FaPlus></FaPlus>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
