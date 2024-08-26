import React, { useState } from "react";

const Keyboard = () => {
  const [input, setInput] = useState("");

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      alert(`Entered: ${input}`);
      setInput("");
    } else if (key === "Backspace") {
      setInput((prev) => prev.slice(0, -1));
    } else {
      setInput((prev) => prev + key);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="mb-4">
        <input
          type="text"
          value={input}
          readOnly
          className="w-96 rounded border border-gray-300 p-2 text-center text-lg shadow-md"
        />
      </div>

      {/* Keyboard Layout */}
      <div className="rounded-lg bg-gray-300 p-4">
        {/* First Row */}
        <div className="mb-2 flex">
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
            <div
              key={key}
              className="mx-1 cursor-pointer rounded-md bg-gray-800 px-4 py-2 font-semibold text-white shadow-sm"
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="mb-2 flex">
          <div className="w-10"></div> {/* Offset for the first key */}
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
            <div
              key={key}
              className="mx-1 cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white shadow-sm"
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </div>
          ))}
        </div>

        {/* Third Row */}
        <div className="mb-2 flex">
          <div className="w-20"></div> {/* Offset for the first key */}
          {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
            <div
              key={key}
              className="mx-1 cursor-pointer rounded-md bg-gray-800 px-4 py-2 text-white shadow-sm"
              onClick={() => handleKeyPress(key)}
            >
              {key}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
