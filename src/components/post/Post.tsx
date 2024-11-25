import Tag from "@/shared/ui/tag/Tag";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Post.module.scss";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import MiniAuthor from "../mini-author/MiniAuthor";
import AuthorTools from "./author-tools/AuthorTools";
import { MdStarOutline } from "react-icons/md";


const Post: FC = () => {
  return (
    <div className={styles.post}>
			<AuthorTools/>
      <Image
        src={"/Rectangle 38.png"}
        alt="post"
        width={1600}
        height={1000}
        className={styles.postImage}
      />

      <div className={styles.detalis}>
        <div className={styles.heading}>
          <Tag isAltStyle>Technology</Tag>
          <div className={styles.buttons}>
            <button className={styles.crudButton}>
              <MdStarOutline />
            </button>
            <button className={styles.crudButton}>
              <BsArrowUp />
            </button>
            <button className={styles.crudButton}>
              <BsArrowDown />
            </button>
          </div>
        </div>
        <div className={styles.title}>
          <Link href={"/post/1"}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </Link>
        </div>
        <MiniAuthor />
      </div>
    </div>
  );
};
export default Post;
