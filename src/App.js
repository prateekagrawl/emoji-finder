import React, { useState } from "react";
import "./styles.css";

const headStyle = {
  padding: "0.4rem",
  height: "5vh",
  width: "60%",
  marginBottom: "1rem"
};
const divStyle = {
  width: "60%",
  margin: "auto",
  border: "1px solid",
  backgroundColor: "#ffda77",
  padding: "1rem"
};

var emojiDictionary = {
  "😊": "Smiling",
  "😐": "Neutral face",
  "😳": "Disbelief",
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
  "😠": "Angry face",
  "😰": "Anxious face with sweat",
  "😘": "Face blowing a kiss",
  "😇": "Smiling face with Halio"
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
      <h1>emoji finder</h1>
      <input style={headStyle} onChange={emojiChangeHandler}></input>
      <div style={{ color: "black", margin: "0.5rem", fontWeight: "bold" }}>
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
