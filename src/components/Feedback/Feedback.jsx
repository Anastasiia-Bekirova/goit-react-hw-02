import styles from './Feedback.module.css';

const Feedback = ({feedbacks, totalFeedback, positiveFeedback}) => {

    return (
        <>
        <ul>
      <li className={styles.listItem}>Good: {feedbacks.good}</li>
      <li className={styles.listItem}>Neutral: {feedbacks.neutral}</li>
      <li className={styles.listItem}>Bad: {feedbacks.bad}</li>    
        </ul>
            {totalFeedback > 0 && <ul><li className={styles.listItem}>Total: {totalFeedback}</li> <li className={styles.listItem}>Positive: {positiveFeedback}%</li></ul>}
        </>
 
    );
};



export default Feedback;