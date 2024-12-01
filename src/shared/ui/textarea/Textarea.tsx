import clsx from "clsx";
import { FC, forwardRef } from "react";
import type { TextareaProps } from "./Textarea-type";
import styles from "./Textarea.module.scss";

const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      onChange,
      value,
      placeholder,
      helperText,
      error,
      pending,
      style,
      rows = 4, // по умолчанию 4 строки
      maxLength,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={clsx(styles.group, {
          [styles.error]: error,
          [styles.pending]: pending,
        })}
        style={style}
      >
        <textarea
          className={clsx(styles.textarea)}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={pending}
          rows={rows}
          maxLength={maxLength}
          ref={ref}
          {...rest}
        />
        {helperText && <p className={styles.helperText}>{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
