"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import Select from "react-select";
import styles from "./NewPost.module.scss";
import Link from "next/link";
import { LINKS } from "@/shared/constants/links";
import { BsArrowLeft } from "react-icons/bs";
import Button from "@/shared/ui/button/Button";
import Image from "next/image";
import Input from "@/shared/ui/input/Input";

const tagOptions = [
  { value: "technology", label: "Technology" },
  { value: "health", label: "Health" },
  { value: "sports", label: "Sports" },
  { value: "education", label: "Education" },
  { value: "travel", label: "Travel" },
];

const NewPost = () => {
  const [value, setValue] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [image] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href={LINKS.AUTHORPROFILE} className={styles.back}>
          <BsArrowLeft />
          <p>Back to Profile</p>
        </Link>
        <p>Title :</p>
				<Input placeholder="Write your title"/>
        <p>Image : </p>
        {image ? (
          <Image src={image} width={200} height={200} alt='ew' />
        ) : (
          <Button>Upload image</Button>
        )}
        <p>Tag :</p>
        <Select
          options={tagOptions}
          value={selectedTag}
          onChange={(v) => setSelectedTag(v as any)}
          className={styles.select}
          placeholder="Select a tag..."
          styles={{
            control: (provided) => ({
              ...provided,
              borderColor: "var(--accentColor)", 
              "&:hover": {
                borderColor: "var(--accentColor)", 
              },
              boxShadow: "none",
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected
                ? "var(--accentColor)"
                : state.isFocused
                ? "rgba(var(--accentColor-rgb), 0.1)" 
                : "white",
              color: state.isSelected ? "white" : "var(--accentColor)",
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "var(--accentColor)", // Цвет текста выбранного элемента
            }),
            menu: (provided) => ({
              ...provided,
              borderRadius: "5px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            }),
          }}
        />

        <p>Content :</p>
        <ReactQuill
          placeholder="Write something..."
          value={value}
          onChange={setValue}
          className={styles.editor}
        />
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default NewPost;
