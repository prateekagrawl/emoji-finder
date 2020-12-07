import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function incrementCounter() {
    var xlikeCounter = likeCounter + 1;
    setLikeCounter(xlikeCounter);
  }
  return (
    <div className="App">
      <h1>inside outt</h1>
      <button onClick={incrementCounter}>Like </button>
      {likeCounter}
    </div>
  );
}
