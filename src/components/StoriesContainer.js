import StoryCard from "./StoryCard";
import styles from "./StoriesContainer.module.css";
const StoriesContainer = () => {
  return (
    <div className={styles.recentStoriesFrame}>
      <div className={styles.catchUpToOurPostsParent}>
        <b className={styles.catchUpTo}>catch up to our posts</b>
        <div className={styles.recentStoryEntries}>Recent story entries</div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.zermattCard}>
          <img
            className={styles.zermattCardImage}
            alt=""
            src="/unsplashrezbvcvaspi@2x.png"
          />
          <div className={styles.zermattCardDetails}>
            <div className={styles.zermattCardTitle}>Zermatt, Switzerland</div>
            <div className={styles.zermattCardDescriptionContainer}>
              <span>
                Marvel on the beauty of the iconic Matterhorn. Find the best
                places to stay that has the best views of this peak...
              </span>
              <span className={styles.viewFullBlog}>view full blog</span>
            </div>
          </div>
        </div>
        <div className={styles.smallCards}>
          <StoryCard
            tuscanyCardImage="/tuscany-card-image@2x.png"
            tuscanyItaly="Tuscany, Italy"
            theAmazingTuscanyIsHomeTo="The amazing Tuscany is home to famous Renaissance art and architecture and a vast scenic..."
          />
          <StoryCard
            tuscanyCardImage="/image-6@2x.png"
            tuscanyItaly="Kyoto, Japan"
            theAmazingTuscanyIsHomeTo="Kyoto is well known for its temples, gardens, Shinto shrines and wooden houses. It’s time to..."
            propWidth="14rem"
          />
          <StoryCard
            tuscanyCardImage="/image-5@2x.png"
            tuscanyItaly="Lofoten Islands, Norway"
            theAmazingTuscanyIsHomeTo="Featuring razor-sharp peaks housing the arctic landscape. This astonishing island is perfect for..."
            propWidth="14rem"
          />
        </div>
      </div>
    </div>
  );
};

export default StoriesContainer;
