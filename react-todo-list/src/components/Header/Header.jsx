import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            {/* 클릭을 하면 원하는 것으로 변경 */}
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
