import styles from "./userprofile.module.scss";

const Userprofile = ({
  username = "Alice Nicole Ginosa",
  img = "./public/images/Alice.png",
  bio = "Writer, reader, walking disaster and photo chaser!",
  posts = "30",
  followers = "150",
  following = "500",
}) => {
  return (
    <div className={styles.ContainerUserProfile}>
      <div className={styles.userDetails}>
        <div className={styles.imageContainer}>
          <img src={img} className={styles.imageProfile} />
        </div>

        <div className={styles.wrapper}>
          <span className={styles.spanstyle}>
            Posts<p className={styles.digits}>{posts}</p>
          </span>
          <span className={styles.spanstyle}>
            Followers<p className={styles.digits}>{followers}</p>
          </span>
          <span className={styles.spanstyle}>
            Following
            <p className={styles.digits}>{following}</p>
          </span>
        </div>
      </div>

      <div className={styles.userInformation}>
        <div className={styles.profileInfos}>
          <p className={styles.spanstyle}>{username}</p>
          <p className={styles.digits}>{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
