import s from './Statistics.module.css';

type Props = {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }: Props) => (
  <section>
    <div className={s.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>

    <div>
      <p>Total:{total}</p>
      {total < 1 ? <p>Positive feedback: 0</p> : <p>Positive feedback: {positivePercentage}%</p>}
    </div>
  </section>
);

export default Statistics;
