import React from "react";
import { BsTrash3 } from "react-icons/bs";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    console.log(e.target.checked);
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <BsTrash3 />
      </button>
    </li>
  );
}
