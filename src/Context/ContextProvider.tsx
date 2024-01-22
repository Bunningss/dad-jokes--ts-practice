import Store from "./Store";
import { ReactNode, useState } from "react";
import { JokeProps } from "./Store";

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [jokes, setJokes] = useState<JokeProps[]>([
    {
      id: 123456,
      joke: '"Why do fathers take an extra pair of socks when they go golfing?" "In case they get a hole in one!"',
      likes: 0,
    },
    {
      id: 456123,
      joke: '"What do you call a factory that makes okay products?" "A satisfactory"',
      likes: 0,
    },
    {
      id: 4561235,
      joke: '"What did the ocean say to the beach?" "Nothing, it just waved."',
      likes: 0,
    },
    {
      id: 34561235,
      joke: `"I asked my dog what's two minus two. He said nothing."`,
      likes: 0,
    },
  ]);

  return (
    <Store.Provider value={{ jokes, setJokes }}>{children}</Store.Provider>
  );
};

export default ContextProvider;
