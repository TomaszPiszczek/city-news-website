import { useState } from 'react';
import aiIcon from '../icon/ai.png';
import databaseIcon from '../icon/database.png';
import websiteIcon from '../icon/website.png';
import apiIcon from '../icon/api.png';
import githubIcon from '../icon/github.png'; 
import erdSchema from '../img/erdschema.png'
import styles from '../styles/header/home.module.css';

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState('');

  const descriptions = {
    ai: 'The first microservice is scheduled to fetch around 300 articles daily. These articles are then processed by gpt-4o-mini for classification before being saved to a database. Due to the limitations of the external API (1 request per second), data is not fetched concurrently. Unfortunetly I could not, edit articles content by gpt-4o-mini because of  cost reductions (output is 4 times more expensive) :) . The service is hosted on AWS.',
    api: 'The second microservice is a simple CRUD service that retrieves processed data from the database and provides it to the website.',
    database: (
      <div>
        <p>
          PostgreSQL database with ERD schema. 
          <img src={erdSchema} alt="ERD Schema" style={{ width: '100%' }} />
        </p>
      </div>
    ),
    website: 'The website, due to time constraints, may not have an appealing design, but it is fully functional.'
  };

  const githubLinks = {
    ai: 'https://github.com/TomaszPiszczek/CityNewsBase',
    api: 'https://github.com/TomaszPiszczek/NewsApi',
    database: '', // Removed database GitHub link
    website: 'https://github.com/TomaszPiszczek/city-news-website'
  };

  const handleClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className={styles.homeContent}>
      {/* ABOUT APP section */}
      <div className={styles.aboutApp}>
        ABOUT APP
      </div>

      <div className={styles.iconList}>
        <img
          src={aiIcon}
          alt="AI Icon"
          onClick={() => handleClick('ai')}
          className={selectedFeature === 'ai' ? `${styles.active}` : ''}
        />
        <img
          src={apiIcon}
          alt="API Icon"
          onClick={() => handleClick('api')}
          className={selectedFeature === 'api' ? `${styles.active}` : ''}
        />
        <img
          src={databaseIcon}
          alt="Database Icon"
          onClick={() => handleClick('database')}
          className={selectedFeature === 'database' ? `${styles.active}` : ''}
        />
        <img
          src={websiteIcon}
          alt="Website Icon"
          onClick={() => handleClick('website')}
          className={selectedFeature === 'website' ? `${styles.active}` : ''}
        />
      </div>

      <div className={styles.description}>
  {selectedFeature
    ? descriptions[selectedFeature]
    : (
      <>
        <strong>Click on an icon to see the description.</strong><br />
        The application uses two microservices and a website to deliver news updates. It fetches US news from a free external API, processes it through a GPT-powered data pipeline, and matches it with relevant locations. Validated news is then made available via a REST API and displayed on the website.<br />
        <strong>Technologies:</strong> Java 17, Postman, Docker, React, Vite, PostgreSQL
      </>
    )}
</div>


      {}
      {selectedFeature && githubLinks[selectedFeature] && (
        <div className={styles.githubLink}>
          <p>
            <a href={githubLinks[selectedFeature]} target="_blank" rel="noopener noreferrer">
              <img
                src={githubIcon}
                alt="GitHub"
                style={{ width: '40px', marginRight: '10px' }} 
              />
              GitHub Repo
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
