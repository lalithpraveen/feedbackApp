// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackSelected: false,
  }

  setIsFeedbackSelected = () => this.setState({isFeedBackSelected: true})

  renderFeedBackQuestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="feedback-question-container">
        <h1 className="feedback-title">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-list-container">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="list-item-container"
              onClick={this.setIsFeedbackSelected}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="emoji-title">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedBackSummary = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="feedback-summary-container ">
        <img src={loveEmojiUrl} alt="loveEmoji" className="love-emoji" />
        <h1 className="thank-you-text ">Thank You!</h1>
        <p className="feedback-summary">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBackSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedBackSelected
            ? this.renderFeedBackSummary()
            : this.renderFeedBackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
