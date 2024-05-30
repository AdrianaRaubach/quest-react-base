import {PropTypes} from "prop-types"
import './button.css'

export const Button = (props) => {
    return (
        <button className='btn' onClick={props.onClick}>
            {props.label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Button;