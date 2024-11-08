import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NewsCard from './NewsCard';
import styles from '../../styles/main/NewsList.module.css';

const NewsList = ({ cityId, stateId, isGlobal }) => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageSize = 7;

  useEffect(() => {
    const fetchNews = async () => {
      let url = '';
      const offset = (currentPage - 1) * pageSize;

      if (isGlobal) {
        url = `http://16.170.252.4:8081/api/news/global?pageSize=${pageSize}&offset=${offset}`;  // Nowy URL dla globalnych newsów
      } else if (cityId) {
        url = `http://16.170.252.4:8081/api/news/by-city/${cityId}?pageSize=${pageSize}&offset=${offset}`;
      } else if (stateId) {
        url = `http://16.170.252.4:8081/api/news/by-state/${stateId}?pageSize=${pageSize}&offset=${offset}`;
      }

      setLoading(true);

      try {
        const response = await axios.get(url);
        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setNews(response.data);
        } else {
          setError('');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [cityId, stateId, isGlobal, currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className={styles.newsList}>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {news && news.length > 0 ? (
        news.map((item) => <NewsCard key={item.id} news={item} />)
      ) : (
        <p>No news available for this location</p>
      )}

      {}
      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={loading || currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage}
        </span>
        <button
          className={styles.paginationButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={loading || news.length < pageSize}
        >
          Next
        </button>
      </div>
    </div>
  );
};

NewsList.propTypes = {
  cityId: PropTypes.string,
  stateId: PropTypes.string,
  isGlobal: PropTypes.bool.isRequired,  
};

export default NewsList;
