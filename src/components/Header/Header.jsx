import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Dodajemy import Link
import SearchBar from './SearchBar';
import StateList from './StateList';
import { fetchStates } from '../../services/api';
import styles from '../../styles/Header/Header.module.css';
import logo from '../../img/logo.png'

function Header() {
  const [states, setStates] = useState([]);
  const [showStateList, setShowStateList] = useState(false);

  useEffect(() => {
    fetchStates()
      .then((data) => setStates(data))
      .catch((error) => console.error(error));
  }, []);

  const handleFocus = (show) => {
    setShowStateList(show);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <a href="/">
          <img src={logo} alt="Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.searchContainer}>
        <SearchBar onFocus={handleFocus} />
      </div>
      <div className={styles.globalNewsLink}>
        <Link to="/news/global" className={styles.globalNewsText}>
          Global News
        </Link>
      </div>
      {showStateList && (
        <div className={styles.stateListContainer}>
          <StateList
            states={states}
            onClose={() => setShowStateList(false)}
            isVisible={showStateList}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
