import { FC } from "react";
import styles from "./FullScreenLoader.module.scss";
import Loader from "../loader/Loader";

const FullScreenLoader: FC = () => {
  return (
    <div className={styles.layout}>
      <Loader />
    </div>
  );
};
export default FullScreenLoader;
