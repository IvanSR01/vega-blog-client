"use client";
import { FC } from "react";
import styles from "./Search.module.scss";
import Input from "@/shared/ui/input/Input";
import CustomSelect from "@/shared/ui/select/Select";
import { FaSearch } from "react-icons/fa";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import { sortOptions } from "@/shared/constants/sort.options";

const SearchForm: FC = () => {
  const { searchTerm, handleChangeSearchTerm: handleSearchTermChange } =
    useSearchQuery("search");

  const { searchTerm: sortTerm, handleChangeSearchTerm: handleSortTermChange } =
    useSearchQuery("sort");

  return (
    <div className={styles.search}>
      <Input
        placeholder="Search..."
        icon={<FaSearch />}
        value={searchTerm}
        onChange={(e: any) => handleSearchTermChange(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <CustomSelect
        options={sortOptions}
        value={
          sortOptions.find((option) => option.value === sortTerm)?.value || ""
        }
        onChange={async (value) => {
          handleSortTermChange(value);
        }}
        placeholder="Select an option"
      />
    </div>
  );
};

export default SearchForm;
