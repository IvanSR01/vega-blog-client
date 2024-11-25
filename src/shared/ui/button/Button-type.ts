import { CSSProperties, ReactNode } from "react";

export type ButtonProps = {
  onClick?: (e?: any) => void;
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  style?: CSSProperties;
  className?: string;
	altStyle?: boolean
};
