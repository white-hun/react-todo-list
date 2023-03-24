import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text: text, status: "active" });
    saveTodos({ id: uuidv4(), text: text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="write & enter"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}

// Todolist에서 받아온 onAdd에 {object}를 넘겨준다 handleAdd의 todo에 들어간다
// trim text에 여백이 사라진다

const TODOS_KEY = "todos";

function saveTodos({ todo }) {
  localStorage.setItem(TODOS_KEY, JSON.stringify({ todo }));
}
