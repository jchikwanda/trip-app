import { useEffect } from "react";
import styles from "./DrawerMenu1.module.css";
const DrawerMenu1 = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.drawerMenu} data-animate-on-scroll>
      <div className={styles.user}>
        <button className={styles.headerProfile}>
          <img className={styles.vectorIcon} alt="" src="/vector51.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector11.svg" />
        </button>
        <button className={styles.welcomeJoeDoe}>Welcome Joe Doe</button>
      </div>
      <div className={styles.drawerMenuOptions}>
        <button className={styles.home}>Home</button>
        <div className={styles.story}>Story</div>
        <button className={styles.gallery}>Gallery</button>
        <button className={styles.contactUs}>Contact Us</button>
      </div>
    </div>
  );
};

export default DrawerMenu1;
