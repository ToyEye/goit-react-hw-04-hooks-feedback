import s from './FeedbackOptions.module.css';
import { MouseEvent } from 'react';

type Props = {
  onLeaveFeedback: (event: MouseEvent<HTMLButtonElement>) => void;
  options: string[];
};

const FeedbackOptions = ({ onLeaveFeedback, options }: Props) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={s.button}
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
