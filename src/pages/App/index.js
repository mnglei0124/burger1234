import React from "react";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerPage from "../BurgerPage";

function App() {
  return (
    <>
      <Toolbar />
      <main className={css.Content}>
        <BurgerPage />
      </main>
    </>
  );
}

export default App;
