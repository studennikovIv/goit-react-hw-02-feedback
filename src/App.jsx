import React, { Component } from 'react'

import Statistics from './components/Statistics/Statistic'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  clickPlus = (e) => {
    const innerHTML = e.target.innerHTML;
    this.setState((currState =>{
      return{[innerHTML]: currState[innerHTML] + 1}
    }))
  
 
  }

  countTotalFeedback() {
    const {good, bad, neutral} = this.state;
    return good + bad + neutral;
  }
  countPositiveFeedbackPercentage() {
    const {good} = this.state;
    return Math.round((good * 100) / this.countTotalFeedback() )
  }

  render() {
    return (
      <div className="conteiner">
        <Section titele={'Please leave feedback'} />
        
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickPlus}
          />
          
          <Section/>
        <Section titele={'Statistics'}>
        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positiveFeedback={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
      </div>
    )
  }
}

export default App
