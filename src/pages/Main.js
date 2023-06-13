import Header from "../components/Header";
import Hero from "../components/Hero";
import HolidayContainer from "../components/HolidayContainer";
import StoriesContainer from "../components/StoriesContainer";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Hero />
      <HolidayContainer />
      <StoriesContainer />
      <footer className={styles.footer}>
        <div className={styles.copyrightInformation}>
          © 2022, Talking Travel. All Rights Reserved.
        </div>
        <div className={styles.footerLinks}>
          <button className={styles.home}>Home</button>
          <a className={styles.blog}>Blog</a>
          <button className={styles.gallery}>Gallery</button>
          <button className={styles.contactUs}>Contact Us</button>
        </div>
      </footer>
    </div>
  );
};

export default Main;
