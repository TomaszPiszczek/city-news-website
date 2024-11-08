// SearchBar.js
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styles from '../../styles/Header/SearchBar.module.css';
import { fetchCities } from '../../services/api.js'; 

function SearchBar({ onFocus }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [showCityList, setShowCityList] = useState(false);
    const [cities, setCities] = useState([]); 
    const [filteredCities, setFilteredCities] = useState([]); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const getCities = async () => {
            try {
                const citiesData = await fetchCities();
                setCities(citiesData); 
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        getCities(); 
    }, []);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term) {
            setShowCityList(true);
            onFocus(false);

            const filtered = cities.filter(city =>
                city.cityName.toLowerCase().includes(term.toLowerCase())
            );
            setFilteredCities(filtered);
        } else {
            setShowCityList(false);
            onFocus(true); 
        }
    };

    const handleCityClick = (city) => {
        navigate(`/city/${city.cityName}`, { state: { id: city.id } }); 
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search for a city"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => onFocus(true)}
            />
            {showCityList && searchTerm && filteredCities.length > 0 && (
                <div className={styles.cityList}>
                    {filteredCities.map((city) => (
                        <div
                            key={city.id}
                            className={styles.cityItem}
                            onClick={() => handleCityClick(city)} 
                        >
                            {city.cityName}
                        </div>
                    ))}
                </div>
            )}
            {showCityList && searchTerm && filteredCities.length === 0 && (
                <div className={styles.cityList}>
                    <div>No cities found</div>
                </div>
            )}
        </div>
    );
}

SearchBar.propTypes = {
    onFocus: PropTypes.func.isRequired,
};

export default SearchBar;
