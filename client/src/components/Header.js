import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { questionNum, changeQuestion } = this.props;
    return (
      <div style={{ background: 'linear-gradient(30deg, #053A70, #3398FF)', color: 'white' }}>
        <div className="container">
          <h1 style={{ display: 'inline-block', fontStyle: 'italic' }}>LearnJavaScript.com</h1>
          <div style={{ display: 'none', paddingBottom: '30px' }}>Question: {questionNum + 1}{' '}
            <button type="button" onClick={() => changeQuestion(questionNum + 1)}>+</button>
            <button type="button" onClick={() => changeQuestion(questionNum - 1)}>-</button>
          </div>
        </div>
      </div>
    )
  }
}
