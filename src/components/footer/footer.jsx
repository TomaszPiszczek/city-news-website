import styles from '../../styles/Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {}
        <div className={styles.licenseSection}>
          <p className={styles.license}>
            Licensed under the MIT License. &copy; 2024 Tomasz Piszczek. All rights reserved.
          </p>
        </div>

     

   

        {}
        <div className={styles.socialMedia}>
         Contact: <a href="mailto:piszczek.tomek09@gmail.com">piszczek.tomek09@gmail.com</a>
          <a href="https://github.com/TomaszPiszczek" target="_blank" rel="https://github.com/TomaszPiszczek">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;