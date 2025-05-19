import React from 'react';
import '../styles/Score.css';

const feedbacks = [
  {
    id: 1,
    title: 'Task 1',
    feedback: 'Excellent attention to detail and creative solutions!',
    score: 9.5,
  },
  {
    id: 3,
    title: 'Task 3',
    feedback: 'Great leadership and communication with the team.',
    score: 8.8,
  },
];

const Score = () => {
  return (
    <div className="score-container">
      <h1 className="score-title">Task Feedback</h1>
      <div className="score-list">
        {feedbacks.map((item) => (
          <div key={item.id} className="score-card">
            <div className="score-info">
              <h2 className="score-task-title">{item.title}</h2>
              <p className="score-feedback">{item.feedback}</p>
            </div>
            <div className="score-value">
              <span>{item.score}</span>
              <span className="score-max">/10</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Score;