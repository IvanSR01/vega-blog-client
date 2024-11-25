'use client'
import { FC } from "react";
import styles from "./QuoteOfTheWeek.module.scss";
import { motion } from "framer-motion";
import { itemVariants } from "@/shared/motion/variants";
interface QuoteOfTheWeekProps {
  quote: string;
  author: string;
}

const QuoteOfTheWeek: FC<QuoteOfTheWeekProps> = ({ quote, author }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="init"
      animate={"animate"}
      exit={"exit"}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
      }}
      className={styles.quoteOfTheWeek}
    >
      <blockquote className={styles.quoteText}>“{quote}”</blockquote>
      <p className={styles.quoteAuthor}>— {author}</p>
    </motion.div>
  );
};

export default QuoteOfTheWeek;
