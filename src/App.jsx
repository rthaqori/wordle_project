import React, { useState, useEffect } from "react";

const VALID_WORDS = [
  "ALBUM",
  "HINGE",
  "MONEY",
  "SCRAP",
  "GAMER",
  "GLASS",
  "SCOUR",
  "BEING",
  "DELVE",
  "YIELD",
  "METAL",
  "TIPSY",
  "SLUNG",
  "FARCE",
  "GECKO",
  "SHINE",
  "CANNY",
  "MIDST",
  "BADGE",
  "HOMER",
  "TRAIN",
  "STORY",
  "HAIRY",
  "FORGO",
  "LARVA",
  "TRASH",
  "ZESTY",
  "SHOWN",
  "HEIST",
  "ASKEW",
  "INERT",
  "OLIVE",
  "PLANT",
  "OXIDE",
  "CARGO",
  "FOYER",
  "FLAIR",
  "AMPLE",
  "CHEEK",
  "SHAME",
  "MINCE",
  "CHUNK",
  "ROYAL",
  "SQUAD",
  "BLACK",
  "STAIR",
  "SCARE",
  "FORAY",
  "COMMA",
  "NATAL",
  "SHAWL",
  "FEWER",
  "TROPE",
  "SNOUT",
  "LOWLY",
  "STOVE",
  "SHALL",
  "FOUND",
  "NYMPH",
  "EPOXY",
  "DEPOT",
  "CHEST",
  "PURGE",
  "SLOSH",
  "THEIR",
  "RENEW",
  "ALLOW",
  "SAUTE",
  "MOVIE",
  "CATER",
  "TEASE",
  "SMELT",
  "FOCUS",
  "TODAY",
  "WATCH",
  "LAPSE",
  "MONTH",
  "SWEET",
  "HOARD",
  "CLOTH",
  "BRINE",
  "AHEAD",
  "MOURN",
  "NASTY",
  "RUPEE",
  "CHOKE",
  "CHANT",
  "SPILL",
  "VIVID",
  "BLOKE",
  "TROVE",
  "THORN",
  "OTHER",
  "TACIT",
  "SWILL",
  "DODGE",
  "SHAKE",
  "CAULK",
  "AROMA",
  "CYNIC",
  "ROBIN",
  "ULTRA",
  "ULCER",
  "PAUSE",
  "HUMOR",
  "FRAME",
  "ELDER",
  "SKILL",
  "ALOFT",
  "PLEAT",
  "SHARD",
  "MOIST",
  "THOSE",
  "LIGHT",
  "WRUNG",
  "COULD",
  "PERKY",
  "MOUNT",
  "WHACK",
  "SUGAR",
  "KNOLL",
  "CRIMP",
  "WINCE",
  "PRICK",
  "ROBOT",
  "POINT",
  "PROXY",
  "SHIRE",
  "SOLAR",
  "PANIC",
  "TANGY",
  "ABBEY",
  "FAVOR",
  "DRINK",
  "QUERY",
  "GORGE",
  "CRANK",
  "SLUMP",
  "BANAL",
  "TIGER",
  "SIEGE",
  "TRUSS",
  "BOOST",
  "REBUS",
  "UNIFY",
  "TROLL",
  "TAPIR",
  "ASIDE",
  "FERRY",
  "ACUTE",
  "PICKY",
  "WEARY",
  "GRIPE",
  "CRAZE",
  "PLUCK",
  "BRAKE",
  "BATON",
  "CHAMP",
  "PEACH",
  "USING",
  "TRACE",
  "VITAL",
  "SONIC",
  "MASSE",
  "CONIC",
  "VIRAL",
  "RHINO",
  "BREAK",
  "TRIAD",
  "EPOCH",
  "USHER",
  "EXULT",
  "GRIME",
  "CHEAT",
  "SOLVE",
  "BRING",
  "PROVE",
  "STORE",
  "TILDE",
  "CLOCK",
  "WROTE",
  "RETCH",
  "PERCH",
  "ROUGE",
  "RADIO",
  "SURER",
  "FINER",
  "VODKA",
  "HERON",
  "CHILL",
  "GAUDY",
  "PITHY",
  "SMART",
  "BADLY",
  "ROGUE",
  "GROUP",
  "FIXER",
  "GROIN",
  "DUCHY",
  "COAST",
  "BLURT",
  "PULPY",
  "ALTAR",
  "GREAT",
  "BRIAR",
  "CLICK",
  "GOUGE",
  "WORLD",
  "ERODE",
  "BOOZY",
  "DOZEN",
  "FLING",
  "GROWL",
  "ABYSS",
  "STEED",
  "ENEMA",
  "JAUNT",
  "COMET",
  "TWEED",
  "PILOT",
  "DUTCH",
  "BELCH",
  "OUGHT",
  "DOWRY",
  "THUMB",
  "HYPER",
  "HATCH",
  "ALONE",
  "MOTOR",
  "ABACK",
  "GUILD",
  "KEBAB",
  "SPEND",
  "FJORD",
  "ESSAY",
  "SPRAY",
  "SPICY",
  "AGATE",
  "SALAD",
  "BASIC",
  "MOULT",
  "CORNY",
  "FORGE",
  "CIVIC",
  "ISLET",
  "LABOR",
  "GAMMA",
  "LYING",
  "AUDIT",
  "ROUND",
  "LOOPY",
  "LUSTY",
  "GOLEM",
  "GONER",
  "GREET",
  "START",
  "LAPEL",
  "BIOME",
  "PARRY",
  "SHRUB",
  "FRONT",
  "WOOER",
  "TOTEM",
  "FLICK",
  "DELTA",
  "BLEED",
  "ARGUE",
  "SWIRL",
  "ERROR",
  "AGREE",
  "OFFAL",
  "FLUME",
  "CRASS",
  "PANEL",
  "STOUT",
  "BRIBE",
  "DRAIN",
  "YEARN",
  "PRINT",
  "SEEDY",
  "IVORY",
  "BELLY",
  "STAND",
  "FIRST",
  "FORTH",
  "BOOBY",
  "FLESH",
  "UNMET",
  "LINEN",
  "MAXIM",
  "POUND",
  "MIMIC",
  "SPIKE",
  "CLUCK",
  "CRATE",
  "DIGIT",
  "REPAY",
  "SOWER",
  "CRAZY",
  "ADOBE",
  "OUTDO",
  "TRAWL",
  "WHELP",
  "UNFED",
  "PAPER",
  "STAFF",
  "CROAK",
  "HELIX",
  "FLOSS",
  "PRIDE",
  "BATTY",
  "REACT",
  "MARRY",
  "ABASE",
  "COLON",
  "STOOL",
  "CRUST",
  "FRESH",
  "DEATH",
  "MAJOR",
  "FEIGN",
  "ABATE",
  "BENCH",
  "QUIET",
  "GRADE",
  "STINK",
  "KARMA",
  "MODEL",
  "DWARF",
  "HEATH",
  "SERVE",
  "NAVAL",
  "EVADE",
  "FOCAL",
  "BLUSH",
  "AWAKE",
  "HUMPH",
  "SISSY",
  "REBUT",
  "CIGAR",
];

const App = () => {
  const [word, setWord] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [error, setError] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [loose, setLoose] = useState(false);

  useEffect(() => {
    generateNewWord();
  }, []);

  const generateNewWord = () => {
    const randomIndex = Math.floor(Math.random() * VALID_WORDS.length);
    setWord(VALID_WORDS[randomIndex]);
    setWon(false);
    setLoose(false);
  };

  const handleKeyDown = (e) => {
    if (isGameOver) return;

    if (e.key === "Enter") {
      if (currentGuess.length !== 5) {
        setError("Guess must be 5 letters long");
        return;
      }

      const emptyIndex = guesses.findIndex((guess) => guess == null);
      if (emptyIndex !== -1) {
        const newGuesses = [...guesses];
        newGuesses[emptyIndex] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = word.toLowerCase() === currentGuess.toLowerCase();
        if (isCorrect) {
          setIsGameOver(true);
          setWon(true);
          setError("You won!");
          return;
        }

        if (emptyIndex === 5) {
          setIsGameOver(true);
          setLoose(true);
          setError("You failed!");
          return;
        }
      }
    } else if (/^[a-zA-Z]$/.test(e.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((guess) => guess + e.key.toUpperCase());
      }
    } else if (e.key === "Backspace") {
      setCurrentGuess((guess) => guess.slice(0, -1));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentGuess, guesses, isGameOver, word]);

  const resetGame = () => {
    setGuesses(Array(6).fill(null));
    setCurrentGuess("");
    setError("");
    setIsGameOver(false);
    generateNewWord();
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-1 bg-red-50">
      {guesses.map((guess, index) => {
        const isCurrentGuess =
          index === guesses.findIndex((val) => val == null);
        return (
          <div key={index}>
            <Line
              guess={isCurrentGuess ? currentGuess : guess || ""}
              isFinal={!isCurrentGuess && guess != null}
              word={word}
            />
          </div>
        );
      })}
      <div className="mt-2 flex flex-col items-center gap-2">
        <p className="flex items-center gap-2">
          <span className="text-gray-500">Word: {word}</span>{" "}
          <button
            className="rounded-md border border-black px-3 py-1"
            onClick={resetGame}
          >
            Reset
          </button>
        </p>
        <p className={`${won && "text-green-500"} ${loose && "text-red-500"}`}>
          <span className={``}>{error}</span>{" "}
          {isGameOver && (
            <button
              onClick={resetGame}
              className={`${won && "border-green-500"} ${loose && "border-red-500"} rounded-md border border-black px-3 py-1`}
            >
              New Game
            </button>
          )}
        </p>
      </div>
      <Keyboard
        word={word}
        guessedWords={guesses}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
      />
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

const Keyboard = ({ word, guessedWords, currentGuess, setCurrentGuess }) => {
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

  const handleKeyClick = (key) => {
    if (key === "Enter") {
      // Simulate the Enter key press
      const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
      window.dispatchEvent(enterEvent);
    } else if (currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
    }
  };

  const renderKey = (key) => (
    <div
      key={key}
      onClick={() => handleKeyClick(key)}
      className={`mx-1 cursor-pointer rounded-md border border-black px-4 py-2 font-semibold text-black shadow-sm ${keyStatus[key] || ""}`}
    >
      {key}
    </div>
  );

  return (
    <div className="flex scale-75 flex-col items-center justify-center md:scale-90 lg:scale-100">
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
        <div className="flex">
          <div className="mb-2 flex">
            <div className="w-20"></div> {/* Offset for the first key */}
            {["Z", "X", "C", "V", "B", "N", "M"].map(renderKey)}
          </div>

          {/* Fourth Row for Enter Key */}
          <div className="">
            <div
              onClick={() => handleKeyClick("Enter")}
              className="mx-1 cursor-pointer rounded-md border border-black bg-green-400 px-4 py-2 font-semibold text-black shadow-sm"
            >
              Enter
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
