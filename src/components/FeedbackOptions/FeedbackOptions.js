import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) =>
  options.map(option => (
    <button key={option} type="button" className={s.button} onClick={onLeaveFeedback} name={option}>
      {option}
    </button>
  ));

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default FeedbackOptions;
