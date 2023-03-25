// import React from "react";
// import { BsTrash3 } from "react-icons/bs";
// import styles from "./Todo.module.css";

// export default function Todo({ todo, onUpdate, onDelete }) {
//   const { text, status } = todo;
//   const handleChange = (e) => {
//     const status = e.target.checked ? "completed" : "active";
//     console.log(e.target.checked);
//     onUpdate({ ...todo, status });
//   };
//   const handleDelete = () => onDelete(todo);
//   return (
//     <li className={styles.todo}>
//       <label className={styles.text}>
//         <input
//           className={styles.checkbox}
//           type="checkbox"
//           id="checkbox"
//           checked={status === "completed"}
//           onChange={handleChange}
//         />
//         {text}
//       </label>
//       <span className={styles.icon}>
//         <button onClick={handleDelete} className={styles.button}>
//           <BsTrash3 />
//         </button>
//       </span>
//     </li>
//   );
// }

//----------------------------------------------------------------------

import React from "react";
import { BsTrash3 } from "react-icons/bs";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={`${styles.text} ${status === "completed" && styles.selected}`}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <BsTrash3 />
        </button>
      </span>
    </li>
  );
}
