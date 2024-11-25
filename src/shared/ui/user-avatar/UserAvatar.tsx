import { FC } from "react";
import styles from "./UserAvatar.module.scss";
import { UserAvartarProps } from "./UserAvatar-type";
import clsx from "clsx";
import { addFullUrl } from "@/shared/utils/addFullUrl";

export const sizes = {
  ultraSmall: styles.ultraSmall,
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
  big: styles.big,
};

const UserAvatar: FC<UserAvartarProps> = ({ size, src, alt, altStyle }) => {
  return (
    <div
      className={clsx(styles.containerAvatar, sizes[size ? size : "medium"], {
        [styles.altStyle]: altStyle,
      })}
    >
      {src ? (
        <>
          <img src={addFullUrl(src)} alt={alt} />
        </>
      ) : (
        <div className={styles.alt}>
          <img src={"/Image.svg"} alt={alt} />
        </div>
      )}
    </div>
  );
};
export default UserAvatar;
