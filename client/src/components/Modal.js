import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { questionNum, changeQuestion, closeModal } = this.props;
    return (
      <div className="modal-background">
        <div className="modal">
          <h1>Correct!</h1>
          <img width="100" src={require('../images/celebrate.svg')} alt="Streamers" />
          <br /><br />
          <button onClick={() => changeQuestion(questionNum + 1)} type="button" className="mainButton">Next Question*</button>
          <button onClick={closeModal} type="button" className="secondaryButton">Review Answer</button>
          <p style={{ fontSize: '0.9rem' }}>*or press <code>CTRL/CMD + Enter</code></p>
        </div>
      </div>
    )
  }
}
