import React, { useState } from "react";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: "고유한", text: text, status: "active" });
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="write & enter" onChange={handleChange} />
      <button>Add</button>
    </form>
  );
}

// trim text에 여백이 사라진다
