import { useState, useEffect } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = window.localStorage.getItem("saved-feedbacks");
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }
);
  const updateFeedback = feedbackType => {
    setFeedbacks({...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1});
  };
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

 const resetFeedback = () => {
     setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
    });
 };
  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedbacks);
    window.localStorage.setItem("saved-feedbacks", stringifiedValue);
  }, [feedbacks]);
  
  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback} 
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (<Feedback
        feedbacks={feedbacks}
        totalFeedback={totalFeedback}
        positiveFeedback={positiveFeedback}
      />) : (<Notification/>)}
    </> 
     
  )
}

export default App
