import { SetStateAction, createContext } from "react";

export interface JokeProps {
  id: number;
  joke: string;
  likes: number;
}

interface StoreProps {
  jokes: Array<JokeProps>;
  setJokes: React.Dispatch<SetStateAction<JokeProps[]>>;
}

const Store = createContext<StoreProps>({
  jokes: [],
  setJokes: () => {},
});

export default Store;
