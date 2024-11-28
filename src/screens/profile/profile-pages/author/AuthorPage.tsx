'use client';
import { FC } from "react";
import styles from "./AuthorPage.module.scss";
import Banner from "@/components/banner/Banner";
import ManyPost from "@/components/many-post/ManyPost";
import ScrollLayout from "@/components/scroll-layout/ScrollLayout";
import { useRouter } from "next/navigation";
import { useProfile } from "@/hooks/useProfile";
// todo: Fix link
const AuthorPage: FC = () => {
	const {push} = useRouter()
	const { profile } = useProfile()
  return (
    <div className={styles.authorPage}>
      <Banner profile={profile} />
      <div className={styles.content}>
        <ScrollLayout>
          <div className={styles.buttons}>
            <button className={styles.crudButton} onClick={() => push('/profile/new-post')}>Add post</button>
            {/* <button className={styles.crudButton}>Edit post</button>
            <button className={styles.crudButton}>Remove post</button> */}
          </div>
        </ScrollLayout>
        <ManyPost title="You posts" />
      </div>
    </div>
  );
};
export default AuthorPage;
