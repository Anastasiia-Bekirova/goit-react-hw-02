import styles from './Options.module.css';

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {

    return (
        <div className={styles.buttons}>
            <button  onClick={() => updateFeedback("good")}type="button">Good</button>
            <button onClick={() => updateFeedback("neutral")}type="button">Neutral</button>
            <button onClick={() => updateFeedback("bad")} type="button">Bad</button>
            {totalFeedback > 0 && <button onClick={() => resetFeedback()} type="button">Reset</button>}
        </div>
    );

};




export default Options;