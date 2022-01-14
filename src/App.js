import { useState } from 'react';
import './App.css';
import Container from './components/Container';
import Statistics from './components/Statistic/';
import Section from './components/Section/';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/NotificationMessage';

const feedBackButtons = [{ name: 'Good' }, { name: 'Bad' }, { name: 'Neutral' }];

export default function Feeedback() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const onButtonStatisticPush = event => {
    const name = event.target.name;
    switch (name) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;
      case 'Bad':
        setBad(prevState => prevState + 1);
        break;
      case 'Neutral':
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
        {feedBackButtons.map(({ name }) => (
          <FeedbackOptions
            key={name}
            options={onButtonStatisticPush}
            onLeaveFeedback={name}
            name={name}
          />
        ))}
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
