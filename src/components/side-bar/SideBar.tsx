import { FC, PropsWithChildren } from "react";
import styles from "./SideBar.module.scss";
import Image from "next/image";

interface Props {
  CommonComponent?: FC;
}

const SideBar: FC<PropsWithChildren<Props>> = ({
  children,
  CommonComponent,
}) => {
  return (
    <div className={styles.layoutSideBar}>
      {children}
      <div className={styles.sideBar}>
        <div className={styles.contentSideBar}>
          {CommonComponent && <CommonComponent />}
          <div className={styles.popularPostS}>
            <div className={styles.title}>Popular Post</div>
            <div className={styles.items}>
              {popularPosts.map((item, index) => (
                <div className={styles.item} key={index}>
                  <div className={styles.image}>
                    <Image
                      src={item.imageUrl}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.detalis}>
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.date}>{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.popularPostS}>
            <div className={styles.title}>Category</div>
            <div className={styles.items}>
              {PopularCategory.map((item, index) => (
                <div className={styles.category} key={index}>
                  <div className={styles.text}>{item.title}</div>
                  <div className={styles.countPost}>{item.countPost}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SideBar;

const popularPosts = [
  {
    title: "All the Stats, Facts, and You'll Ever Need to Know",
    date: "26 Feb 2023",
    imageUrl: "/Rectangle 38.png",
  },
  {
    title: "All the Stats, Facts, and You'll Ever Need to Know",
    date: "26 Feb 2023",
    imageUrl: "/Rectangle 38.png",
  },
  {
    title: "All the Stats, Facts, and You'll Ever Need to Know",
    date: "26 Feb 2023",
    imageUrl: "/Rectangle 38.png",
  },
  {
    title: "All the Stats, Facts, and You'll Ever Need to Know",
    date: "26 Feb 2023",
    imageUrl: "/Rectangle 38.png",
  },
];

const PopularCategory = [
  {
    title: "Trevaling",
    countPost: 10,
  },
  {
    title: "Technology",
    countPost: 10,
  },
  {
    title: "Health",
    countPost: 10,
  },
  {
    title: "Food",
    countPost: 10,
  },
];
