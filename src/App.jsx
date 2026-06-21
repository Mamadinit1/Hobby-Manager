import { createRoot } from "react-dom/client";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./styles/reset.css";
import "./styles/fonts.css";
import "./components/Header/header.css";
import "./components/Main/main.css";
import "./styles/app.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")).render(
  <div className="app-container">
    <Header />
    <Main />
  </div>,
);
