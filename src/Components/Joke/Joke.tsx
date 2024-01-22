import Button from "../Button/Button";
import "./Joke.css";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import { JokeProps } from "../../Context/Store";

interface JokeComponentProps {
  joke: JokeProps;
  increaseLike: (id: number) => void;
  decreaseLike: (id: number) => void;
  deleteJoke: (id: number) => void;
}

const Joke: React.FC<JokeComponentProps> = ({
  joke,
  increaseLike,
  decreaseLike,
  deleteJoke,
}) => {
  return (
    <div className="joke">
      <p className="joke-text">{joke?.joke}</p>
      <p className="joke-text">Likes Count: {joke?.likes}</p>
      <div className="button-wrapper">
        <Button action={() => increaseLike(joke.id)} icon={like} />
        <Button action={() => decreaseLike(joke.id)} icon={dislike} />
        <Button label="delete" action={() => deleteJoke(joke.id)} />
      </div>
    </div>
  );
};

export default Joke;
