import { useState, useMemo, useCallback } from "react";
import DrawerMenu1 from "./DrawerMenu1";
import PortalDrawer from "./PortalDrawer";
import styles from "./HeaderElementsRow.module.css";
const HeaderElementsRow = ({
  vector,
  vector1,
  headerElementsRowHeaderElAlignSelf,
  headerElementsRowHeaderElFlex,
}) => {
  const headerElementsRowStyle = useMemo(() => {
    return {
      alignSelf: headerElementsRowHeaderElAlignSelf,
      flex: headerElementsRowHeaderElFlex,
    };
  }, [headerElementsRowHeaderElAlignSelf, headerElementsRowHeaderElFlex]);

  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className={styles.headerElementsRow} style={headerElementsRowStyle}>
        <button className={styles.headerLogo}>
          <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
        </button>
        <div className={styles.headerMenuOptionsRow}>
          <div className={styles.headerLinks}>
            <button className={styles.home}>Home</button>
            <div className={styles.story}>Story</div>
            <button className={styles.gallery}>Gallery</button>
            <button className={styles.contactUs}>Contact Us</button>
          </div>
          <button
            className={styles.headerHamburgerMenu}
            onClick={openDrawerMenu}
          >
            <div className={styles.hamburgerBackground} />
            <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
          </button>
          <div className={styles.seperator} />
          <button className={styles.headerSearchIcon}>
            <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
          </button>
          <button className={styles.headerProfile}>
            <img className={styles.vectorIcon3} alt="" src={vector} />
            <img className={styles.vectorIcon4} alt="" src={vector1} />
          </button>
        </div>
      </div>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu1 onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HeaderElementsRow;
