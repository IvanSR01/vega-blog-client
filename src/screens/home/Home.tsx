import { FC } from "react";
import styles from "./Home.module.scss";
import dynamic from "next/dynamic";
import PopularPosts from "@/components/popular-posts/PopularPosts";
import QuoteOfTheWeek from "./quote-of-the-week/QuoteOfTheWeek";


const ManyPost = dynamic(() => import("@/components/many-post/ManyPost"));
const More = dynamic(() => import("./more/More"));
const Authors = dynamic(() => import("@/screens/home/authors/Authors"));
const Tags = dynamic(() => import("@/screens/home/popular-tags/PopularTags"));
const Home: FC = () => {
  return (
    <div className={styles.home}>
      <PopularPosts />
      <Tags />
      <QuoteOfTheWeek
        quote="Success is not final, failure is not fatal: It is the courage to continue that counts."
        author="Winston Churchill"
      />
      <ManyPost title="Latest" />
      <More />
      <Authors />
    </div>
  );
};

export default Home;
