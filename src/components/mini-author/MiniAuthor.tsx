import { FC } from "react";
import styles from "./MiniAuthor.module.scss";
import UserAvatar from "@/shared/ui/user-avatar/UserAvatar";
import Link from "next/link";

const MiniAuthor: FC = () => {
  return (
    <Link href={"/author/1"} className={styles.miniAuthor}>
      <UserAvatar alt="Tom" size="small" />
      <p className={styles.authorName}>Tracey Wilson</p>
    </Link>
  );
};
export default MiniAuthor;
