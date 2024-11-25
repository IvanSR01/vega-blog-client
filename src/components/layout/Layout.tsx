import { FC, PropsWithChildren } from "react";
import Header from "../header/Header";
import styles from "./Layout.module.scss";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("../footer/Footer"));

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <Header />
        {children}
      </div>
			<Footer />
    </div>
  );
};

export default Layout;
