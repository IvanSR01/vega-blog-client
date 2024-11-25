"use client";
import { FC } from "react";
import styles from "./AuthorTools.module.scss";
import { FaEdit, FaTrash } from "react-icons/fa";

const AuthorTools: FC = () => {
  const isAuthor = false;
  return (
    <div className={styles.tools}>
      {isAuthor && (
        <button className={styles.crudButton}>
          <FaEdit />
        </button>
      )}
      {isAuthor && (
        <button className={styles.crudButton}>
          <FaTrash />
        </button>
      )}
    </div>
  );
};
export default AuthorTools;
