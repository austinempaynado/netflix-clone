import { PropTypes } from "prop-types";
import "./language.css";

export const DropDown = () => {
  return (
    <div>
      <select id="drop-down">
        <option value="English">English</option>
        <option value="English">French</option>
      </select>
    </div>
  );
};
