"use client";
import { FC } from "react";
import styles from "./Banner.module.scss";
import UserAvatar from "@/shared/ui/user-avatar/UserAvatar";
import {
  FaEdit,
  FaFacebook,
  FaInstagram,
  FaTrash,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { itemVariants } from "@/shared/motion/variants";
import useBanner from "./useBanner";
const Banner: FC = () => {
  const { isAuthorPage, isYourProfile } = useBanner({ id: 0 });
  const { push } = useRouter();
  return (
    <motion.div
      variants={itemVariants}
      initial="init"
      animate="animate"
      exit="exit"
      transition={{
        duration: 0.6,
      }}
      className={styles.banner}
    >
      <div className={styles.heading}>
        <div className={styles.user}>
          <UserAvatar alt="dasda" size="large" />
          <div className={styles.details}>
            <h4 className={styles.name}>Jonathan Doe</h4>
            <p className={styles.slug}>Collaborator & Editor</p>
          </div>
        </div>
        <div className={styles.buttons}>
          {isYourProfile ? (
            <>
              <button className={styles.bannerButton}>
                <FaEdit />
              </button>
              <button className={styles.bannerButton}>
                <FaTrash />
              </button>
              <button
                className={styles.bannerButton}
                onClick={() =>
                  push(isAuthorPage ? "/profile/user" : "/profile/author")
                }
              >
                Switch to {isAuthorPage ? "User" : "Author"} page
              </button>
            </>
          ) : (
            <button className={styles.bannerButton}>Follow</button>
          )}
        </div>
      </div>
      <div className={styles.description}>
        Meet Jonathan Doe, a passionate writer and blogger with a love for
        technology and travel. Jonathan holds a degree in Computer Science and
        has spent years working in the tech industry, gaining a deep
        understanding of the impact technology has on our lives.
      </div>
      {isAuthorPage ? (
        <div className={styles.subCount}>
          <div className={styles.count}>
            <h4>Posts</h4>
            <p>10</p>
          </div>
          <div className={styles.count}>
            <h4>Followers</h4>
            <p>100</p>
          </div>
          <div className={styles.count}>
            <h4>Views count</h4>
            <p>100</p>
          </div>
          <div className={styles.count}>
            <h4>Likes count</h4>
            <p>100</p>
          </div>
        </div>
      ) : (
        <div className={styles.subCount}>
          <div className={styles.count}>
            <h4>Favorites posts</h4>
            <p>10</p>
          </div>
          <div className={styles.count}>
            <h4>Following</h4>
            <p>100</p>
          </div>
          <div className={styles.count}>
            <h4>Comments count</h4>
            <p>100</p>
          </div>
        </div>
      )}
      <div className={styles.social}>
        <div className={styles.bannerButton}>
          <FaFacebook />
        </div>
        <div className={styles.bannerButton}>
          <FaTwitter />
        </div>
        <div className={styles.bannerButton}>
          <FaInstagram />
        </div>
        <div className={styles.bannerButton}>
          <FaYoutube />
        </div>
      </div>
    </motion.div>
  );
};
export default Banner;
