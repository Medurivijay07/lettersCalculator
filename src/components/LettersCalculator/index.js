// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0, searchInput: ''}

  onEnteringText = event => {
    const text = event.target.value
    this.setState({lettersCount: text.length, searchInput: text})
  }

  render() {
    const {lettersCount, searchInput} = this.state
    return (
      <div className="main-container">
        <div className="content-card">
          <div className="text-card">
            <h1 className="content">Calculate the Letters you enter</h1>
            <label htmlFor="letters" className="enter">
              Enter the Phrase
            </label>
            <input
              type="text"
              id="letters"
              placeholder="Enter the phrase"
              className="input"
              value={searchInput}
              onChange={this.onEnteringText}
            />
            <div className="button">
              <p>No.of letters: {lettersCount}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
