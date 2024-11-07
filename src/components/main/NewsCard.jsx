// NewsCard.js
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/main/NewsCard.module.css';

const NewsCard = ({ news }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/news/${news.id}`);
  };

  const truncatedContent = news.content.length > 150
    ? `${news.content.substring(0, 150)}...`
    : news.content;

  return (
    <div className={styles.newsCard} onClick={handleClick}>
      <img src={news.imgUrl} alt={news.title} className={styles.newsImage} />
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{news.title}</h3>
        <p className={styles.newsDescription}>{truncatedContent}</p>
        <p className={styles.newsAuthor}>By {news.author}</p>
        <p className={styles.newsPublishDate}>Published on {news.publishDate}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    publishDate: PropTypes.string.isRequired, 
  }).isRequired,
};

export default NewsCard;
