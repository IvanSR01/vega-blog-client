import { FC } from "react";
import styles from "./NotFound.module.scss";
import Link from "next/link";
import Button from "@/shared/ui/button/Button";

const NotFound: FC = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.code}>404</div>
      <div className={styles.content}>
        <p className={styles.text}>Page not found</p>
        <div className={styles.contentText}>
          {"We're"} sorry, This page is unknown or does <br /> not exist the
          page are you looking for.
        </div>
        <div className="d-flex gap-2" style={{
					paddingTop: '10px'
				}}>
          <Button
            style={{	
              textTransform: "uppercase",
							fontWeight: 'bold'
            }}
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <Button
            style={{
              textTransform: "uppercase",
							fontWeight: 'bold'
            }}
            altStyle
          >
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
