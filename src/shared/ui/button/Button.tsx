/* eslint-disable @typescript-eslint/no-unused-expressions */
import { FC } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button-type";
import clsx from "clsx";

const Button: FC<ButtonProps> = ({
  children,
  className,
  altStyle,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(styles.button, className, {
        [styles.altStyle]: altStyle,
      })}
    >
      {children}
    </button>
  );
};
export default Button;
