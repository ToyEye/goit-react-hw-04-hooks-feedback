import React, { Component } from "react";
import "./App.css";
import Container from "./components/Container"
import Statistics from "./components/Statistic/";
import Section from './components/Section/';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/NotificationMessage';
import PropTypes from "prop-types";

class Feeedback extends Component{
  static propTypes = {
    state: PropTypes.objectOf(PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })),
    onButtonGoodPush: PropTypes.func,
    onButtonNeutralPush: PropTypes.func,
    onButtonBadPush: PropTypes.func,
    countTotalFeedback: PropTypes.func,
    countPositiveFeedbackPercentage: PropTypes.func,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  onButtonGoodPush = () => {
    this.setState(prevState => {
      return {good: prevState.good + 1};
    })
  }

  onButtonNeutralPush = () => {
    this.setState(prevState => {
      return {neutral: prevState.neutral + 1};
    })
  }

  onButtonBadPush = () => {
    this.setState(prevState => {
      return {bad: prevState.bad + 1};
    })
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = 0;
     total = good + neutral +bad;
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalCount = this.countTotalFeedback()
    const positiveCount = good * 100 / totalCount ;
    return positiveCount.toFixed(2);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      
        <Container>
        <Section title="Pleas leave feedback" >
          <FeedbackOptions 
          options={this.onButtonGoodPush} 
          onLeaveFeedback="Good" 
            name="good" />
          
          <FeedbackOptions 
          options={this.onButtonNeutralPush} 
          onLeaveFeedback="Neutral" 
            name="neutral" />
          
          <FeedbackOptions 
          options={this.onButtonBadPush} 
          onLeaveFeedback="Bad" 
          name="bad"/>
        </Section>

        <Section title="Statistic" >
          {this.countTotalFeedback() < 1 ? <Notification message="There is no feedback" /> :
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />}

          
          
          </Section>
          </Container>
     
    );
  }
}

export default Feeedback;
