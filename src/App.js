import "./styles.css";
import { useState } from "react";

export default function App() {
  const [relativeValue, setRelativeValue] = useState("");
  const [guess, setGuess] = useState(1);
  const [currentNumber, setCurrentNumber] = useState(() =>
    Math.floor(Math.random() * 101)
  );

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
    if (guess > currentNumber) {
      setRelativeValue("greater");
    } else if (guess < currentNumber) {
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
          value={guess} // Use defaultValue to prevent re-renders
          onChange={(e) => setGuess(+e.target.value)} // Update the ref value
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
