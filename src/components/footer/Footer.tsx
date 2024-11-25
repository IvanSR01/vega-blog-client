import { FC } from "react";
import styles from "./Footer.module.scss";
import clsx from "clsx";
import Input from "@/shared/ui/input/Input";
import Button from "@/shared/ui/button/Button";
import { MdEmail } from "react-icons/md";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.about}>
            <h4>About us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
            <div>
              <b>Email :</b> info@jstemplate.net
            </div>
            <div>
              <b>Phone :</b> 880 123 456 789
            </div>
          </div>
          <div className={clsx(styles.item, "w-2")}>
            <h4>Quick Link</h4>
            {[...Array(5)].map((_, index) => (
              <p key={index}>Home</p>
            ))}
          </div>
          <div className={styles.item}>
            <h4>Categoryk</h4>
            {[...Array(5)].map((_, index) => (
              <p key={index}>Lifestyle</p>
            ))}
          </div>
          <div className={styles.feedback}>
            <div className="d-flex align-center flex-column gap-1">
              <h4>Weekly Newsletter</h4>
              <p>Get blog articles and offers via email</p>
            </div>
            <div className="d-flex flex-column gap-2">
              <Input placeholder="Your email" icon={<MdEmail/>}/>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
