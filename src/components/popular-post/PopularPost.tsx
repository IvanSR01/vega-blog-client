"use client";
import Image from "next/image";
import styles from "./PopularPost.module.scss";
import Tag from "@/shared/ui/tag/Tag";
import UserAvatar from "@/shared/ui/user-avatar/UserAvatar";
import { motion } from "framer-motion";
import { itemVariants, variants } from "@/shared/motion/variants";
import { FC } from "react";
import clsx from "clsx";
interface Props {
  size?: keyof typeof sizes;
  img: string;
}

const sizes = {
  small: styles.small,
  big: styles.big,
};

const PopularPost: FC<Props> = ({ size = "big", img }) => {
  return (
    <motion.div
      variants={variants}
      initial="init"
      animate={"animate"}
      exit={"exit"}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.2,
      }}
      className={clsx(styles.popular, sizes[size])}
    >
      <Image
        src={img}
        alt="post"
        width={1600}
        height={1000}
        className={styles.background}
      />
      <div className={styles.content__popular}>
        <motion.div
          variants={itemVariants}
          initial="init"
          animate={"animate"}
          exit={"exit"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Tag>Technology</Tag>
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial="init"
          animate={"animate"}
          exit={"exit"}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className={styles.title}
        >
          The Impact of Technology on the Workplace: How Technology is Changing
        </motion.div>
        {size === "big" && (
          <motion.div
            variants={itemVariants}
            initial="init"
            animate={"animate"}
            exit={"exit"}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className={styles.detalis}
          >
            <UserAvatar alt="Tom" size="small" />
            <p className={styles.authorName}>Tracey Wilson</p>
            <p className={styles.date}>August 20, 2022</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default PopularPost;
