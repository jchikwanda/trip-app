import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1 className={styles.introtext}>
        <h1 className={styles.letsTalkAboutContainer}>
          <span>Let’s talk</span>
          <span className={styles.aboutYourNext}> about your next trip</span>
        </h1>
      </h1>
      <div className={styles.calltoactionbuttons}>
        <div className={styles.sharestorybutton}>
          <b className={styles.shareYourStory}>Share your story</b>
        </div>
        <div className={styles.watchhighlightsbutton}>
          <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
          <b className={styles.shareYourStory}>Watch highlights</b>
        </div>
      </div>
    </div>
  );
};

export default Hero;
