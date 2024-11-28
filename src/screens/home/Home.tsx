import { FC } from "react";
import styles from "./Home.module.scss";
import dynamic from "next/dynamic";
import PopularPosts from "@/components/popular-posts/PopularPosts";
import QuoteOfTheWeek from "./quote-of-the-week/QuoteOfTheWeek";
import { Post } from "@/shared/interfaces/post.interface";
import { Tag } from "@/shared/interfaces/tag.interface";

const ManyPost = dynamic(() => import("@/components/many-post/ManyPost"));
const More = dynamic(() => import("../../components/more/More"));
const Authors = dynamic(() => import("@/screens/home/authors/Authors"));
const Tags = dynamic(() => import("@/components/popular-tags/PopularTags"));

interface Props {
	mostViewedPosts: Post[]
	posts: Post[]
	tags: Tag[]
}

const Home: FC<Props> = ({mostViewedPosts, posts, tags}) => {
  return (
    <div className={styles.home}>
      <PopularPosts posts={mostViewedPosts} />
      <Tags tags={tags}/>
      <QuoteOfTheWeek
        quote="Success is not final, failure is not fatal: It is the courage to continue that counts."
        author="Winston Churchill"
      />
      <ManyPost title="Latest" posts={posts}/>
      <More />
      <Authors />
    </div>
  );
};

export default Home;
