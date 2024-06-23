import styles from "./footer.module.scss";
import { BsHouseDoor } from "react-icons/bs";
import { BsSearchHeart } from "react-icons/bs";
import { MdSlowMotionVideo } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div>
        <BsHouseDoor className={styles.footerIcon} />
      </div>
      <div>
        <BsSearchHeart className={styles.footerIcon} />
      </div>
      <div>
        <IoMdHeartEmpty className={styles.footerIcon} />
      </div>
      <div>
        <MdSlowMotionVideo className={styles.footerIcon} />
      </div>
    </section>
  );
};

export default Footer;
