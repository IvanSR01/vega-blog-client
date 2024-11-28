import { FC } from "react";
import styles from "./Authors.module.scss";
import UserAvatar from "@/shared/ui/user-avatar/UserAvatar";
import More from "../../../components/more/More";

const Authors: FC = () => {
  return (
    <div className={styles.authors}>
      <div className={styles.author__layout}>
        <div className={styles["scroll-container"]}>
          <div className={styles.items}>
            {[...Array(20)].map((_, index) => (
              <div className={styles.item} key={index}>
                <UserAvatar alt="Tom" size="big" />
                <p className={styles.name}>Tom Hanks</p>
                <p className={styles.slug}>@tomhanks</p>
              </div>
            ))}
          </div>
        </div>
      </div>
			<More />
    </div>
  );
};

export default Authors;
