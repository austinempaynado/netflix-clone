import {PropTypes} from "prop-types"
import "./iconButton.css"
export const IconButton = (props) => {
    const {icon, type} = props;
    return(
        <button id="icon-button" className={type} >{icon}</button>
    )
    

}

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}