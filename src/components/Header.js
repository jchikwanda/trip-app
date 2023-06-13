import HeaderElementsRow from "./HeaderElementsRow";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.navigationBar}>
      <HeaderElementsRow
        vector="/vector5.svg"
        vector1="/vector6.svg"
        headerElementsRowHeaderElAlignSelf="unset"
        headerElementsRowHeaderElFlex="1"
      />
    </header>
  );
};

export default Header;
