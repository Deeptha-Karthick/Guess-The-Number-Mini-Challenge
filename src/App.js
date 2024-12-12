import "./styles.css";
import { useRef, useState } from "react";

export default function App() {
  const [relativeValue, setRelativeValue] = useState("");
  const [currentNumber, setCurrentNumber] = useState(() =>
    Math.floor(Math.random() * 101)
  );

  const guess = useRef(1); // Using useRef for guess

  const MessageToDisplay = () => {
    if (relativeValue === "greater") {
      return (
        <div>
          Your guess is <strong>Higher</strong> than the actual number
        </div>
      );
    } else if (relativeValue === "lesser") {
      return (
        <div>
          Your guess is <strong>Less</strong> than the actual number
        </div>
      );
    } else if (relativeValue === "") {
      return "";
    } else {
      return (
        <div>
          Your guess is <strong>Right</strong>
        </div>
      );
    }
  };

  const CheckValue = () => {
    const guessValue = Number(guess.current); // Convert ref value to a number
    if (guessValue > currentNumber) {
      setRelativeValue("greater");
    } else if (guessValue < currentNumber) {
      setRelativeValue("lesser");
    } else {
      setRelativeValue("equal");
    }
  };

  const Reset = () => {
    setRelativeValue("");
    setCurrentNumber(Math.floor(Math.random() * 101));
  };

  return (
    <div className="App">
      <h1>Guess the number</h1>
      <div className="game-container">
        <p>Guess a Number between 0 and 100</p>
        <input
          type="number"
          min="0"
          max="100"
          defaultValue={guess.current} // Use defaultValue to prevent re-renders
          onChange={(e) => (guess.current = +e.target.value)} // Update the ref value
        />
      </div>
      <div className="buttons">
        <button onClick={Reset}>Reset</button>
        <button onClick={CheckValue}>Check</button>
      </div>
      <MessageToDisplay />
    </div>
  );
}
