import ManyPost from "@/components/many-post/ManyPost";
import SideBar from "@/components/side-bar/SideBar";
import { FC, Suspense } from "react";
import styles from "./Blog.module.scss";
import Search from "./search/Search";

const Blog: FC = () => {
  return (
    <div className={styles.blog}>
      <Suspense>
        <Search />
      </Suspense>
      <SideBar>
        <ManyPost title="Blog" baseGridColumn="repeat(1, 1fr)" />
      </SideBar>
    </div>
  );
};
export default Blog;
