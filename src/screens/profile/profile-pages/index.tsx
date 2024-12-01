import { FC } from "react";
import styles from "./index.module.scss";
import UserPage from "./user/UserPage";
import AuthorPage from "./author/AuthorPage";
import UpdateProfilePage from "./update-profile/UpdateProfilePage";

const Pages = {
	user: () => <UserPage  />,
	author: () => <AuthorPage  />,
	'update-profile': () => <UpdateProfilePage  />
}

interface Props {
	name: keyof typeof Pages
}

const Profile: FC<Props> = ({ name }) => {
  return (
    <div className={styles.profile}>
      {Pages[name]()}
    </div>
  );
};

export default Profile;
