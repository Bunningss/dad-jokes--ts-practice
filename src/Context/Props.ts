export interface JokeProps {
  id: number;
  joke: string;
  likes: number;
}

export interface StoreProps {
  jokes: Array<JokeProps>;
  setJokes: React.Dispatch<React.SetStateAction<JokeProps[]>>;
}
