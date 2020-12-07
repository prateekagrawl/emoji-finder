import React, { useState } from "react";
import "./styles.css";

const inputStyle = {
  display: "block",
  padding: "0.4rem",
  height: "5vh",
  width: "40%",
  marginBottom: "1rem",
  margin: "auto"
};
const divStyle = {
  width: "50%",
  margin: "auto",
  border: "1px none ",
  backgroundColor: "rgb(245 239 141)",
  padding: "1rem",
  borderRadius: "1rem"
};

var emojiDictionary = {
  "😊": "Smiling",
  "😐": "Neutral face",
  "😳": "Disbelief",
  "😂": "Face with tears of joy",
  "😍": "Heart eyes",
  "😔": "Sad",
  "😃": "Happy face",
  "❤️": "Love",
  "😉": "Winking",
  "😝": "Tongue out",
  "😋": "Goofy",
  "😌": "Relieved face",
  "😪": "Sleepy face",
  "😎": "Smiling face with sunglasses",
  "☹️": "Frowning face",
  "😲": "Astonished face",
  "😢": "Crying face",
  "😞": "Disappointed face",
  "😵": "Dizzy face",
  "😠": "Angry face",
  "😰": "Anxious face with sweat",
  "😘": "Face blowing a kiss",
  "😇": "Smiling face with Halo"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiChangeHandler(event) {
    var emojiMeaning = event.target.value;
    meaning = emojiDictionary[emojiMeaning]; //searching in object
    if (meaning === undefined)
      meaning = "Sorry 😔,we don't have this emoji in our database";
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    //check whether emoji is present in db or not
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ marginTop: "3rem" }}>Emotion interpretor</h1>
      <p style={{ fontWeight: "normal" }}>
        You can either paste an emoji here or click on any emoji mentioned below
      </p>
      <input
        style={inputStyle}
        placeholder="Paste an emoji here"
        onChange={emojiChangeHandler}
      ></input>
      <div style={{ color: "black", margin: "1rem", fontWeight: "bold" }}>
        {" "}
        {meaning}{" "}
      </div>

      {/* adding lists */}
      <div style={divStyle}>
        <div style={{ marginBottom: "1rem" }}>
          {" "}
          Emojis present in our database 👇
        </div>

        {emojiArray.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ cursor: "pointer", padding: "0.5rem" }}
              key={emoji}
            >
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
