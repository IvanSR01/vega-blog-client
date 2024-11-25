"use client";
import { FC } from "react";
import styles from "./PopularTags.module.scss";
import Tag from "@/shared/ui/tag/Tag";
import { popularTags } from "@/shared/constants/tags";
import Link from "next/link";
import ScrollLayout from "@/components/scroll-layout/ScrollLayout";

const PopularTags: FC = () => {
  return (
    <div className={styles.popular}>
      <h3>Most Search Tags : </h3>
      <ScrollLayout width="70%"
			 >
        <div className={styles.tags}>
          {popularTags.map((item: string) => (
            <Link href={"/blog" + "/" + item} key={item}>
              <Tag isAltStyle>{item}</Tag>
            </Link>
          ))}
        </div>
      </ScrollLayout>
    </div>
  );
};

export default PopularTags;
