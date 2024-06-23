import Photo from "../Photo/Photo";
import styles from "./gallery.module.scss";
import { useContext, useEffect } from "react";
import { globalContext } from "../../App";
import { IoIosArrowBack } from "react-icons/io";
import { useRef } from "react";

const Gallery = ({ list = [] }) => {
  const photoRef = useRef(null);
  const galleryRef = useRef(null);
  const { setIsGalleryVisible, currentIndex } = useContext(globalContext);

  useEffect(() => {
    const currentPhoto = Object.values(photoRef.current.children).filter(
      (photo) => {
        return photo.id === currentIndex;
      }
    )[0];

    galleryRef.current.scrollTo({
      top: currentPhoto.offsetTop - 40,
      left: 0,
      behavior: "smooth",
    });
  }, [currentIndex]);

  const handleGalleryCloseClick = () => {
    setIsGalleryVisible(false);
  };

  return (
    <div
      className={styles.galleryContainer}
      onClick={handleGalleryCloseClick}
      ref={galleryRef}
    >
      <div className={styles.sectionIconBackGallery}>
        <IoIosArrowBack
          onClick={handleGalleryCloseClick}
          className={styles.IconBackGallery}
        />
      </div>
      <div className={styles.photogalleryContainer} ref={photoRef}>
        {list.map((photo) => (
          <Photo
            id={photo.id}
            key={photo.id}
            image={photo.urls.regular}
            description={photo.alt_description}
            user={photo.user.name}
            likes={photo.likes}
            showDetails={true}
            context="gallery"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
