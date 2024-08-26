import { useState, useEffect } from "react";
import Keyboard from "./Keyboard";

const WORD_LIST_API_URL = "https://api.frontendexpert.io/api/fe/wordle-words";

function App() {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState("hi");
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [wordLength, setWordLength] = useState(5);

  useEffect(() => {
    const fetchWordList = async () => {
      try {
        const response = await fetch("/api/fe/wordle-words");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const wordList = await response.json();
        const randomWord =
          wordList[Math.floor(Math.random() * wordList.length)];
        setResult(randomWord);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchWordList();
  }, []);

  return (
    <>
      <div>{result}</div>
      <Keyboard />
    </>
  );
}

export default App;
