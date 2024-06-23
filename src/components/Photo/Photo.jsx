import styles from "./photo.module.scss";
import { useContext } from "react";
import { globalContext } from "../../App";
import classNames from "classnames";
import { CiHeart } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa6";

const Photo = ({
  image,
  title,
  description,
  user,
  likes,
  showDetails,
  context,
  id,
}) => {
  const { setIsGalleryVisible, SetisClicked, SetcurrentIndex } =
    useContext(globalContext);

  const handlePhotoClicked = () => {
    SetisClicked(true);
    SetcurrentIndex(id);
    setIsGalleryVisible(true);
  };

  return (
    <div className={styles.photoContainer} id={id}>
      <img
        src={image}
        alt={title}
        className={classNames(styles.photo, {
          [styles.gridPhoto]: context === "grid",
          [styles.galleryPhoto]: context === "gallery",
        })}
        onClick={handlePhotoClicked}
      />
      {showDetails && (
        <div className={styles.detailsContainer}>
          <div className={styles.iconsProfile}>
            <FaRegHeart />
            <FaRegComment />
            <FaRegPaperPlane />
          </div>
          <div className={styles.infoImage}>
            <p className={styles.likeUser}>
              Likes: {likes} <CiHeart className={styles.iconLikes} />
            </p>
            <p className={styles.nameUser}>{user}</p>
            <p className={styles.descUser}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photo;
