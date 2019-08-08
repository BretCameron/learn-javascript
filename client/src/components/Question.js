import React, { Component } from 'react';
import Hint from './Hint';

export default class Question extends Component {

  render() {
    const { question, hint } = this.props;
    return (
      <div style={{ height: '100%' }}>
        {/* <h2>Question {questionNum + 1}</h2> */}
        <div dangerouslySetInnerHTML={{ __html: question }} />
        <br />
        <Hint
          hint={hint}
        />
      </div>
    )
  }
}
