import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title, onAdd, text, buttonColor}) => {
    return (
        <div className='header'>
            <h2>{title}'s Health Card</h2>
            <Button text={text} color={buttonColor} onClick={onAdd}/>

      </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'green', 
//     backgroundColor: 'black'
// }

export default Header
