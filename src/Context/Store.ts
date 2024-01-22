import { createContext } from "react";
import { StoreProps } from "./Props";

const Store = createContext<StoreProps>({
  jokes: [],
  setJokes: () => {},
});

export default Store;
