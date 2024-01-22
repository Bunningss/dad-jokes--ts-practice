import { useContext, useEffect, useState } from "react";
import "./AddJoke.css";
import Button from "../Button/Button";
import Store from "../../Context/Store";
import { JokeProps } from "../../Context/Props";

interface AddJokeProps {
  setAddJoke: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddJoke: React.FC<AddJokeProps> = ({ setAddJoke }) => {
  const [values, setValues] = useState<JokeProps>({
    id: 0,
    joke: "",
    likes: 0,
  });
  const [error, setError] = useState<string>("");
  const { setJokes, jokes } = useContext(Store);

  // Get user input value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Add new joke
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (values.joke.split("").filter((val) => val !== " ").length < 12) {
      return setError("Please try a joke that is more than 12 characters long");
    }

    setJokes([
      {
        ...values,
        id: Math.floor(Math.random() * 99999999999999999 + 10000000000),
      },
      ...jokes,
    ]);
    setAddJoke(false);
  };

  // TODO: Add reset error message logic

  return (
    <form className="add-joke">
      <input
        type="text"
        name="joke"
        onChange={handleChange}
        className="joke-input"
      />
      {error && <p className="error-message">{error}</p>}
      <Button label="add joke" action={handleSubmit} />
    </form>
  );
};

export default AddJoke;
