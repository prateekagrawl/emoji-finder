import React, { useState } from "react";
import "./styles.css";

const divStyle = {
  display: "flex",
  justifyContent: "center",
  margin: "0.5rem"
};

var emojiDictionary = {
  "😊": "smiling",
  "😐": "Neutral face",
  "😳": "disbelief",
  "😍": "Heart eyes",
  "😔": "sad",
  "😃": "happy face",
  "❤️": "love",
  "😉": "winking",
  "😝": "tongue out",
  "😋": "goofy"
};

var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState(" ");

  function emojiChangeHandler(event) {
    var emojiMeaning = event.target.value;
    meaning = emojiDictionary[emojiMeaning]; //searching in object
    if (meaning === undefined)
      meaning = "Sorry 😔,we don't have it in our database";
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
      <input
        style={{ padding: "0.4rem" }}
        onChange={emojiChangeHandler}
      ></input>
      <div style={{ color: "black", margin: "0.5rem" }}> {meaning} </div>

      {/* adding lists */}
      <div style={divStyle}> Emojis present in our database 👇</div>

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
  );
}
