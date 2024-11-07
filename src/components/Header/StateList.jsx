// StateList.js
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import locationIcon from '../../icon/location.png';
import styles from '../../styles/Header/StateList.module.css';

function StateList({ states, onClose, isVisible }) {
    const navigate = useNavigate();

    const handleStateClick = (state) => {
        navigate(`/state/${state.stateName}`, { state: { id: state.id } });
        onClose(); 
    };

    return (
        <div className={`${styles.stateContainer} ${isVisible ? styles.visible : ''}`}>
            <h3>States</h3>
            <div className={styles.stateList}>
                {states.map((state) => (
                    <div
                        key={state.id}
                        onClick={() => handleStateClick(state)} 
                        className={styles.stateItem}
                    >
                        <img src={locationIcon} alt="Location Icon" className={styles.icon} />
                        {state.stateName}
                    </div>
                ))}
            </div>
        </div>
    );
}

StateList.propTypes = {
    states: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            stateName: PropTypes.string.isRequired,
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired,
    isVisible: PropTypes.bool.isRequired,
};

export default StateList;
