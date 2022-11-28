import { configureStore } from "@reduxjs/toolkit";
import counter from "./modules/counter";
import colorList from "./modules/colorList";
import todos from "./modules/todos";

const store = configureStore({
  reducer: {
    counter,
    colorList,
    todos
  },
});

export default store;