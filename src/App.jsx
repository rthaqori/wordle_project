import React, { useState, useEffect } from "react";

const VALID_WORDS = ["raman", "arise", "stark", "tiger", "snake"];

const App = () => {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [error, setError] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const wordList = VALID_WORDS;
    const randomIndex = Math.floor(Math.random() * wordList.length);
    const selectedWord = wordList[randomIndex];
    setWord(selectedWord);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isGameOver) return;

      if (e.key === "Enter") {
        if (currentGuess.length !== 5) {
          setError("Guess must be 5 letters long");
          return;
        }

        // if (!VALID_WORDS.includes(currentGuess.toLowerCase())) {
        //   setError("Invalid word");
        //   return;
        // }

        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((guess) => guess == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = word.toLowerCase() === currentGuess.toLowerCase();
        if (isCorrect) {
          setIsGameOver(true);
          setError("You won!");
          return;
        }

        // Add the guess to the array if there's space
        const emptyIndex = guesses.findIndex((guess) => guess == null);
        if (emptyIndex !== -1) {
          setGuesses((prevGuesses) =>
            prevGuesses.map((guess, index) =>
              index === emptyIndex ? currentGuess.toUpperCase() : guess,
            ),
          );
          setCurrentGuess("");
          setError(""); // Clear error after a valid guess
        } else {
          setError("No more guesses left.");
        }
      } else if (/^[a-zA-Z]$/.test(e.key)) {
        if (currentGuess.length < 5) {
          setCurrentGuess((guess) => guess + e.key.toUpperCase());
        }
      } else if (e.key === "Backspace") {
        setCurrentGuess((guess) => guess.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, guesses, isGameOver, word]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-1 bg-red-50">
      {guesses.map((guess, index) => {
        const isCurrentGuess =
          index === guesses.findIndex((val) => val == null);
        return (
          <div key={index}>
            <Line
              guess={isCurrentGuess ? currentGuess : (guess ?? "")}
              isFinal={!isCurrentGuess && guess != null}
              word={word}
            />
          </div>
        );
      })}
      <p>{word}</p>
      <p>{error}</p>
      <Keyboard word={word} guessedWords={guesses} />
    </div>
  );
};

const Line = ({ guess, isFinal, word }) => {
  const tiles = [];
  for (let i = 0; i < 5; i++) {
    const char = guess[i] || " ";
    let bgColor = "";

    if (isFinal) {
      if (word[i].toLowerCase() === char.toLowerCase()) {
        bgColor = "bg-green-400"; // Correct position
      } else if (word.toLowerCase().includes(char.toLowerCase())) {
        bgColor = "bg-yellow-400"; // Correct letter but wrong position
      } else {
        bgColor = "bg-gray-300"; // Incorrect letter
      }
    }

    tiles.push(
      <div
        className={`flex h-10 w-10 items-center justify-center border border-black text-lg font-medium uppercase ${bgColor}`}
        key={i}
      >
        {char}
      </div>,
    );
  }
  return <div className="flex gap-1">{tiles}</div>;
};

const Keyboard = ({ word, guessedWords }) => {
  const keyStatus = {};

  // Loop through all guessed words to determine the status of each key
  guessedWords.forEach((guess) => {
    if (guess) {
      for (let i = 0; i < guess.length; i++) {
        const char = guess[i].toUpperCase();
        if (word[i].toUpperCase() === char) {
          keyStatus[char] = "bg-green-400"; // Correct position
        } else if (
          word.toUpperCase().includes(char) &&
          keyStatus[char] !== "bg-green-400"
        ) {
          keyStatus[char] = "bg-yellow-400"; // Correct letter but wrong position
        } else if (!word.toUpperCase().includes(char)) {
          keyStatus[char] = "bg-gray-300"; // Incorrect letter
        }
      }
    }
  });

  const renderKey = (key) => (
    <div
      key={key}
      className={`mx-1 cursor-pointer rounded-md border border-black px-4 py-2 font-semibold text-black shadow-sm ${keyStatus[key] || ""}`}
    >
      {key}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-lg p-4">
        {/* First Row */}
        <div className="mb-2 flex">
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map(renderKey)}
        </div>

        {/* Second Row */}
        <div className="mb-2 flex">
          <div className="w-10"></div> {/* Offset for the first key */}
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map(renderKey)}
        </div>

        {/* Third Row */}
        <div className="mb-2 flex">
          <div className="w-20"></div> {/* Offset for the first key */}
          {["Z", "X", "C", "V", "B", "N", "M"].map(renderKey)}
        </div>
      </div>
    </div>
  );
};

export default App;
