
import './Header.css';
import PropTypes from 'prop-types';

function Header ({heading,customClassName}) {

// const {heading,canTravel,cannotTravelHeading} = props
    return(
        <div className={customClassName}>
           <h1>{heading}</h1>
        </div>
    )
}
Header.defaultProps = {
    customClassName: 'header-class',
  }

Header.propTypes = {
    customClassName: PropTypes.string,
}

export default Header