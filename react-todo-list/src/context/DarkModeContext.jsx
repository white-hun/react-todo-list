import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  // page가 load되었을 때 실행(context 가 mount 되었을 때)
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark); // provider(우산) 안에서 쓰이는 데이터를 담고 있는 react 내부 state에 먼저 업데이트
    updateDarkMode(isDark); // 웹페이지에 있는 html에 dark라는 class를 넣을건지 안넣을건지 판단하는 함수-->
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// -->
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark"; // toggle될 때마다 localstorage에 저장
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light"; // toggle될 때마다 localstorage에 저장
  }
}
// 일일히 사용하기 번거로우니 커스텀훅으로 만들어 사용한다
export const useDarkMode = () => useContext(DarkModeContext);

// 변수로 만들어 boolean값을 사용할 수 있게 만들고
// localStorage의 theme이 datk로 되어 있거나
// theme이 저장되어 있지않고 윈도우에 다크모드를 쓴다고 정의되어 있다면
// setDarkMode에 내부 상태 state에 isDark(다크모드 인지 아닌지, isDark 변수로 boolean을 받으니까 사용)
// 그 다음 updateDarkMode에 isDark 업데이트
