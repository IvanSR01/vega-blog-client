import { FC } from "react";
import styles from "./Author.module.scss";
import ManyPost from "@/components/many-post/ManyPost";
import SideBar from "@/components/side-bar/SideBar";
import Banner from "@/components/banner/Banner";

const Author: FC = () => {
  return (
    <div className={styles.authorPage}>
      <Banner />
      <SideBar>
        <ManyPost
          title="Latest posts Tracey Wilson"
          baseGridColumn="repeat(1, 1fr)"
        />
      </SideBar>
    </div>
  );
};
export default Author;
