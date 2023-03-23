import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import DarkModeProvider from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];
export default function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      {/* 전달하는 인자값과 호출하는 인자값이 같으니까 함수의 참조값만 작성 */}
      {/* <Header filters={filters} filter={filter} onFilterChange={(filter) => setFilter(filter)} /> */}
      {/* filters:모든필터의 정보, filter:현재 선택된 필터의 정보, onFilterChange:변경되면 호출할 수 있는 set함수 */}
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
