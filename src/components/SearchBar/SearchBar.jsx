import styles from "./searchbar.module.scss";
import { useContext } from "react";
import { globalContext } from "../../App";
import { useState } from "react";

const SearchBar = () => {
  const { searchInput, setSearchInput } = useContext(globalContext);
  const [placeholder, Setplaceholder] = useState("Flick through my photos");

  const cancelPlaceholder = () => {
    Setplaceholder(" ");
  };
  return (
    <div className={styles.searchBarContainer}>
      <form className={styles.form} type="submit">
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchBarInput}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onClick={cancelPlaceholder}
        />
      </form>
    </div>
  );
};

export default SearchBar;
