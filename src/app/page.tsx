"use client"; // This is a client component
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/GlobalStyles";
import { useEffect, useState } from "react";
import * as S from "./styles";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [toggled, setToggled] = useState(false);
  const [iconName, setIconName] = useState("FaMoon");

  useEffect(() => {
    setIconName(theme === "dark" ? "FaMoon" : "FaSun");
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      <S.Container>
        <S.Button
          onClick={() => {
            toggleTheme();
            setToggled(!toggled);
          }}
          toggled={toggled}
        ></S.Button>
      </S.Container>
    </ThemeProvider>
  );
};

export default App;
