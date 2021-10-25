import React from "react";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";
import BurgerBuilder from "../BurgerBuilder";

function App() {
  return (
    <>
      <Toolbar />
      <main className={css.Content}>
        <BurgerBuilder />
      </main>
    </>
  );
}

export default App;
