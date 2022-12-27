import { React, useState, useEffect } from "react";

function FeedbackItem({ item }) {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("this is is this");
  const handleClick = () => {
    setRating((prev) => {
      console.log(prev);
      return prev + 1;
    });
  };
  return (
    <div className="container">
      <div className="card">
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
        <button type="button" onClick={handleClick}>
          Click
        </button>
      </div>
    </div>
  );
}

export default FeedbackItem;
