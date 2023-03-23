import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <BsMoon />}
        {darkMode && <BsSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            {/* 클릭을 하면 원하는 것으로 변경 */}
            <button
              className={`${styles.filter} ${filter === value && styles.selected}`}
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
