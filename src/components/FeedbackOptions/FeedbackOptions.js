import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options, name }) => (
  <button key={name} className={s.button} type="button" onClick={options} name={name}>
    {onLeaveFeedback}
  </button>
);

FeedbackOptions.prototype = {
  onLeaveFeedback: PropTypes.string.isRequired,
  options: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default FeedbackOptions;
