import styles from "./grid.module.scss";
import Photo from "../Photo/Photo";
import { useContext } from "react";
import { globalContext } from "../../App";

const Grid = ({ list = [] }) => {
  const { isGridEmpty } = useContext(globalContext);
  return isGridEmpty ? (
    <h3 className={styles.titleNoMatch}>
      No match found <br></br> Please try again!
    </h3>
  ) : (
    <div className={styles.gridContainer}>
      {list.map((photo) => (
        <Photo
          id={photo.id}
          key={photo.id}
          image={photo.urls.regular}
          title={photo.alt_description}
          photo={photo}
          showDetails={false}
          context="grid"
        />
      ))}
    </div>
  );
};
export default Grid;
