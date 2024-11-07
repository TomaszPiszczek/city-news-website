// NewsDetail.js
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from '../styles/NewsDetail.module.css';

const NewsDetail = () => {
  const { id } = useParams();  
  const [newsDetail, setNewsDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`http://16.170.252.4:8081/api/news/${id}`);
        setNewsDetail(response.data);
      } catch (error) {
        setError('Error fetching news details.' + error);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!newsDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {}

      <div className={styles.newsDetail}>
        <img src={newsDetail.imgUrl} alt={newsDetail.title} className={styles.newsImage} />
        <div className={styles.newsContent}>
          <h1 className={styles.newsTitle}>{newsDetail.title}</h1>
          <p className={styles.newsAuthor}>By {newsDetail.author}</p>
          <p className={styles.newsPublishDate}>Published on {newsDetail.publishDate}</p>
          <p className={styles.newsDescription}>{newsDetail.content}</p>
        </div>
      </div>
    </div>
  );
};
export default NewsDetail;
