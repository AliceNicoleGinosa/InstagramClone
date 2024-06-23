import styles from "./app.module.scss";
import Grid from "./components/Grid/Grid";
import SearchBar from "./components/SearchBar/SearchBar";
import Footer from "./components/Footer/Footer";
import { BASE_URL } from "../utils/endpoints";
import Gallery from "./components/Gallery/Gallery";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";
import Logo from "./components/Logo/Logo";
import Userprofile from "./components/Userprofile/Userprofile";
export const globalContext = createContext();

const App = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [photos, setPhotos] = useState([]);
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [isClicked, SetisClicked] = useState(false);
  const [currentIndex, SetcurrentIndex] = useState(0);
  const [isGridEmpty, setIsGridEmpty] = useState(false);
  const value = {
    setIsGalleryVisible,
    isGalleryVisible,
    searchInput,
    setSearchInput,
    photos,
    setPhotos,
    filteredPhotos,
    setFilteredPhotos,
    isClicked,
    SetisClicked,
    currentIndex,
    SetcurrentIndex,
    isGridEmpty,
    setIsGridEmpty,
  };

  useEffect(() => {
    fetch(
      `${BASE_URL}?client_id=${import.meta.env.VITE_ACCESS_KEY}&per_page=30`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      });
  }, []);

  useEffect(() => {
    if (searchInput === "") {
      setFilteredPhotos(photos);
    } else {
      const filtered = photos.filter((photo) =>
        photo.alt_description.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredPhotos(filtered);
      setIsGridEmpty(filtered.length === 0);
    }
  }, [searchInput, photos]);

  return (
    <globalContext.Provider value={value}>
      <div className={styles.heroSection}>
        <Logo />

        <Userprofile />
        <SearchBar />
      </div>
      <Grid list={filteredPhotos} />

      {isGalleryVisible && <Gallery list={filteredPhotos} />}
      <Footer />
    </globalContext.Provider>
  );
};

export default App;
