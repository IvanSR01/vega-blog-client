import { useModal } from "@/hooks/useModal";
import styles from "./Select.module.scss";
import { FC } from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  placeholder: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
}) => {
  const { openModal, closeModal, modalElementRef, isModalOpen } = useModal();

  const selectedOption = options.find((option) => option.value === value);

  const handleOptionClick = (optionValue: string) => {
    if (typeof onChange === "function") {
      onChange(optionValue);
    }
    closeModal();
  };

  return (
    <div className={styles.selectContainer} ref={modalElementRef}  onClick={() => openModal()}>
      <div className={styles.select}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      {isModalOpen && (
        <div className={styles.optionsList}>
          {options.map((option) => (
            <div
              key={option.value}
              className={styles.option}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
