import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Statistics from './components/Statistic/';
import Section from './components/Section/';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/NotificationMessage';

export default function Feeedback() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onButtonStatisticPush = event => {
    const name = event.target.name;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalCount = countTotalFeedback();
    const positiveCount = (good * 100) / totalCount;
    return positiveCount.toFixed(2);
  };

  return (
    <Container>
      <Section title="Pleas leave feedback">
        <FeedbackOptions options={onButtonStatisticPush} onLeaveFeedback="Good" name="good" />

        <FeedbackOptions options={onButtonStatisticPush} onLeaveFeedback="Neutral" name="neutral" />

        <FeedbackOptions options={onButtonStatisticPush} onLeaveFeedback="Bad" name="bad" />
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() < 1 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}
