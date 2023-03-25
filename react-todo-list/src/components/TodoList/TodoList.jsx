import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
  // const [todos, setTodos] = useState(readTodosFromLocalStorage()); // 함수 자체를 전달하게되면 useState가 업데이트 될 때마다 함수도 계속 호출된다
  // useState는 내부적으로 컴포넌트에 필요한 데이터를 기억하고 있다
  // 컴포넌트가 rerendering될 때마다 useState도 다시 호출되서 초기값이 다시 전달되는데
  // useState가 업데이트되서 저장된 값이 있다면 초기값을 무시하고 내부적으로 사용하고 있는 값을 사용하게된다
  // 설정해준 초기값을 읽어오기 때문에 브라우저에서 UI가 변경되진 않겠지만 매번 초기값의 함수가 계속 호출된다
  // 이런 경우에는 함수 자체를 전달하는 것이 아니라 callback함수로 한번 감싸서 호출해줘야한다
  // 그럼 컴포넌트가 마운트될 때 한번만 업데이트된다

  // 함수 자체를 계속 호출해서 함수에서 return 된 값을 전달하는 것 대신에 callback 함수로 전달
  // 내부적으로 저장된 상태가 있다면 초기값이 필요하지 않으니까 초기값을 return하는 함수를 호출할 필요가 없기 때문에 실행하지 않는다

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // todos가 변경될 때마다 {}을 수행한다

  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage() {
  console.log("readTodosFromLocalStorage");
  const todos = localStorage.getItem("todos"); // localStorage에서 뭘 할 때 는 key 값을 사용해 value에 작용한다
  return todos ? JSON.parse(todos) : [];
  // todos가 있으면 stringify한 todos를 parse해서 가져오고 아니라면 빈 배열
}
