import React from "react";
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function colorChange(params) {
    if (params >= 75) {
        return s.goodStatistics
    } else if (params >= 50 && params < 75) {
        return s.middleStatistics
    } else {
        return s.badStatistics
    }
}

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <section >
        <div className={s.statistics}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>

        <div>
            <p>Total:{total}</p>
            {total < 1 ? (<p>Positive feedback: 0</p>)
                : (<p className={colorChange(positivePercentage)}>Positive feedback: {positivePercentage}%</p>)}
        </div>
    </section>
)

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}

export default Statistics;