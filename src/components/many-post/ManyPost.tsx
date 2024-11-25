"use client";
import { FC } from "react";
import styles from "./ManyPost.module.scss";
import Post from "../post/Post";
import { motion } from "framer-motion";
import { itemVariants } from "@/shared/motion/variants";

interface ManyPostProps {
  title: string;
	baseGridColumn?: string;
}

const ManyPost: FC<ManyPostProps> = ({ title, baseGridColumn }) => {
  return (
    <div className={styles.many__post}>
      <motion.h3
        variants={itemVariants}
        initial="init"
        animate={"animate"}
        exit={"exit"}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      >
        {title}
      </motion.h3>
      <div className={styles.items} style={{ gridTemplateColumns: baseGridColumn }}>
        {[...Array(8)].map((_, index) => (
          <motion.div
            variants={itemVariants}
            initial="init"
            animate={"animate"}
            exit={"exit"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + 0.2 * index,
            }}
            key={index}
          >
            <Post />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ManyPost;
