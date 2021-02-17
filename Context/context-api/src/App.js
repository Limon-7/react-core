import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import NavBar from "./components/NavBar";
import ToggleTheme from "./components/ToggleTheme";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import BookContextProvider from "./contexts/BookContext";

function App() {
  return (
    <div className="app">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
