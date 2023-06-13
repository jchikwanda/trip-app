import { useMemo } from "react";
import styles from "./StoryCard.module.css";
const StoryCard = ({
  tuscanyCardImage,
  tuscanyItaly,
  theAmazingTuscanyIsHomeTo,
  propWidth,
}) => {
  const tuscanyCardImageStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.tuscanyCard}>
      <img
        className={styles.tuscanyCardImage}
        alt=""
        src={tuscanyCardImage}
        style={tuscanyCardImageStyle}
      />
      <div className={styles.tuscanyCardDetails}>
        <div className={styles.tuscanyItaly}>{tuscanyItaly}</div>
        <div className={styles.theAmazingTuscanyContainer}>
          <span>{theAmazingTuscanyIsHomeTo}</span>
          <span className={styles.viewFullBlog}>view full blog</span>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
