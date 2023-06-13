import HeaderElementsRow from "../components/HeaderElementsRow";
import styles from "./NavigationBar.module.css";
const NavigationBar = () => {
  return (
    <div className={styles.navigationBar}>
      <HeaderElementsRow vector="/vector511.svg" vector1="/vector61.svg" />
    </div>
  );
};

export default NavigationBar;
