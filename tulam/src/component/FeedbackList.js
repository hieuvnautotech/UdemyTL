import { React, useState } from 'react'
import FeedbackItem from './FeedbackItem'
function FeedbackList({ feedback }) {

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList