import { FC } from "react";
import styles from "./Contact.module.scss";
import SideBar from "@/components/side-bar/SideBar";
import Button from "@/shared/ui/button/Button";
import ContactTabs from "../tabs/ContactTabs";
import Input from "@/shared/ui/input/Input";

const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <h2>Contact us</h2>
      <ContactTabs />
      <SideBar>
        <div className={styles.content}>
          <div className={styles.heading}>Get In Touch</div>
          <div className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            impedit eligendi in ducimus laboriosam perspiciatis? Illum
            consequatur ea cumque, molestiae quod provident, placeat, labore
            laborum doloribus quam laboriosam illo perferendis.
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <h3>Address</h3>
              <p>
                1328 Oak Ridge Drive, Saint Louis, <br /> Missouri - 63102
              </p>
            </div>
            <div className={styles.item}>
              <h3>Phone</h3>
              <p>+1 123 456 7890</p>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form>
              <div className={styles.formGroup}>
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your email" />
              </div>
							<Input type="text" placeholder="Subject" />
              <textarea placeholder="Write your message..." required />
              <p className={styles.privacyText}>
                We care about your data in our{" "}
                <a href="/privacy-policy">Privacy Policy</a>
              </p>
              <Button>Send message</Button>
            </form>
          </div>
        </div>
      </SideBar>
    </div>
  );
};

export default Contact;
