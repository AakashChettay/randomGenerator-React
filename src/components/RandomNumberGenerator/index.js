import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generateRandom = () => {
    const randNum = Math.ceil(Math.random() * 101)
    this.setState({randomNumber: randNum})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            onClick={this.generateRandom}
            className="buttonStyle"
          >
            Generate
          </button>
          <p className="numberStyle">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
