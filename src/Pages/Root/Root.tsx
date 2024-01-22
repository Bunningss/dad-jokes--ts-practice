import { useContext } from "react";
import "./Root.css";
import Store from "../../Context/Store";
import Container from "../../Components/Container/Container";
import Title from "../../Components/Title/Title";
import Button from "../../Components/Button/Button";
import Joke from "../../Components/Joke/Joke";

const Root: React.FC = () => {
  const { jokes, setJokes } = useContext(Store);
  console.log(jokes);

  const handleClick = () => {
    setJokes([
      ...jokes,
      {
        id: Math.floor(Math.random() * 9900000000000000 + 1000000),
        joke: "Blank Joke",
        likes: 10,
      },
    ]);
  };

  const increaseLike = (id: number) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          return { ...joke, likes: joke.likes + 1 };
        } else {
          return joke;
        }
      })
    );
  };

  const decreaseLike = (id: number) => {
    setJokes(
      jokes.map((joke) => {
        if (joke.id === id) {
          if (joke.likes > 0) {
            return { ...joke, likes: joke.likes - 1 };
          } else {
            return joke;
          }
        } else {
          return joke;
        }
      })
    );
  };

  const deleteJoke = (id: number) => {
    setJokes(jokes.filter((joke) => joke.id !== id));
  };

  return (
    <Container>
      <div className="home">
        <Title title="dad jokes" center />
        <Button label="add joke" action={handleClick} />
        {jokes.map((joke) => (
          <Joke
            joke={joke}
            key={joke.id}
            increaseLike={increaseLike}
            decreaseLike={decreaseLike}
            deleteJoke={deleteJoke}
          />
        ))}
      </div>
    </Container>
  );
};

export default Root;
