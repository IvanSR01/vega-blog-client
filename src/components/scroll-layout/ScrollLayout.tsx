import { FC, PropsWithChildren } from "react";
import styles from "./ScrollLayout.module.scss";

const ScrollLayout: FC<
  PropsWithChildren<{
    width?: string;
  }>
> = ({ children, width = "100%" }) => {
  return <div className={styles.scroll} style={{ width }}>{children}</div>;
};
export default ScrollLayout;
