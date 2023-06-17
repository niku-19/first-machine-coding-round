import { BsSearch } from "react-icons/bs";

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand__name}>
        <NavLink to="/">
          <h2 className={styles.brand__name__heading}>Brand Name</h2>
        </NavLink>
      </div>
      <div className={styles.search__icons}>
        <NavLink to="/search">
          <BsSearch className={styles.icon} />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
