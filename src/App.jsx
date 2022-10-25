import React, { Component } from 'react'
import css from './App.module.css'
import Statistics from './components/Statistics/statistic'
import FeedbackOptions from './components/FeedbackOptions/feedbackOptions'
import Section from './components/section/section'
import Notification from './components/Notification/notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  positiveFeedback = 0
  total = 0
  clickPlus = (e) => {
    if (e.target.innerHTML === 'good') {
      this.setState((currentStat) => {
        return { good: currentStat.good + 1 }
      })
    }
    if (e.target.innerHTML === 'neutral') {
      this.setState((currentStat) => {
        return { neutral: currentStat.neutral + 1 }
      })
    }
    if (e.target.innerHTML === 'bad') {
      this.setState((currentStat) => {
        return { bad: currentStat.bad + 1 }
      })
    }
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  }

  countTotalFeedback() {
    this.total += 1
  }
  countPositiveFeedbackPercentage() {
    this.setState((currentStat) => {
      const result =
        (currentStat.good * 100) /
        (currentStat.bad + currentStat.good + currentStat.neutral)

      return (this.positiveFeedback = Math.round(result))
    })
  }

  render() {
    return (
      <div className="conteiner">
        <Section titele={'Please leave feedback'} />
        <ul className={css.btnList}>
          <FeedbackOptions
            option={Object.keys(this.state)}
            onLeaveFeedback={this.clickPlus}
          />
        </ul>
        {this.total !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.total}
            positiveFeedback={this.positiveFeedback}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    )
  }
}

export default App
