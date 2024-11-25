"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./PostById.module.scss";
import Image from "next/image";
import Tag from "@/shared/ui/tag/Tag";
import MiniAuthor from "@/components/mini-author/MiniAuthor";
import Comments from "@/components/comments/Comments";
import { GrView } from "react-icons/gr";
import SideBar from "@/components/side-bar/SideBar";
import Link from "next/link";

const PostById: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [anchors, setAnchors] = useState<string[]>([]);
  const [activeAnchor, setActiveAnchor] = useState<string>("");

  useEffect(() => {
    if (contentRef.current) {
      const anchorElements = contentRef.current.querySelectorAll("a");
      const extractedAnchors = Array.from(anchorElements)
        .map((anchor) => anchor.getAttribute("href") ?? "")
        .filter((href) => href.startsWith("#"));
      extractedAnchors.unshift("#intro");
      extractedAnchors.push("#comments");
      setAnchors(extractedAnchors);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = anchors
      .map((anchor) => document.querySelector(anchor) as HTMLElement)
      .filter((section): section is HTMLElement => !!section);

    const observer = new IntersectionObserver(
      (entries) => {
        // Фильтруем видимые секции
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio); // Сортируем по степени видимости

        if (visibleSections.length > 0) {
          // Берем наиболее видимую секцию
          const mostVisibleSection = visibleSections[0].target.id;
          setActiveAnchor(`#${mostVisibleSection}`);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75], // Проверяем несколько уровней видимости
        rootMargin: "-20% 0px -20% 0px", // Предотвращает срабатывание на границе
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [anchors]);

  return (
    <SideBar
      CommonComponent={() => (
        <nav className={styles.nav__container}>
          <div className={styles.nav}>
            <ul>
              {anchors.map((anchor, index) => (
                <li
                  key={index}
                  className={activeAnchor === anchor ? styles.activeLi : ""}
                >
                  <a href={anchor}>{anchor.replace("#", "")}</a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    >
      <div className={styles.layout}>
        <div className={styles.post__by__id} id="intro">
          <div className={styles.path}>
            <Link href={"/blog"} className={styles.item}>
              Blog
            </Link>{" "}
            <Link href={"/blog/technology"} className={styles.item}>
              Technology
            </Link>
            <div className={styles.item}>
              The Impact of Technology on the Workplace
            </div>
          </div>
          <Tag>Technology</Tag>
          <h1 className={styles.title}>
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className={styles.detalis}>
            <div className={styles.flex}>
              <MiniAuthor />
              <p className={styles.date}>August 20, 2022</p>
            </div>
            <div className={styles.views}>
              <GrView />
              <p>20</p>
            </div>
          </div>

          <Image
            src={"/Rectangle 38.png"}
            alt="post"
            width={1600}
            height={1000}
          />
          <div ref={contentRef} className={styles.content} id="content">
            {[...Array(4)].map((_, index) => (
              <div key={index} id={`section-${index.toString()}`}>
                <h3 className="font-bold">Paragraph {index}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <a href={`#section-${index.toString()}`}>Paragraph {index}</a>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
                <br />
              </div>
            ))}
          </div>
        </div>
        <Comments />
      </div>
    </SideBar>
  );
};

export default PostById;
