import React from 'react';

import Question from '../components/Question';
import Solution from '../components/Solution';
import Tests from '../components/Tests';
import Modal from '../components/Modal';

import { isEqual } from '../helpers/isEqual';
import questions from '../data/questions';

export default class QuestionPage extends React.Component {
  state = {
    questionNum: 0,
    solution: '',
    result: '',
    testResults: [],
    errorMessage: '',
    displayModal: false,
  }

  changeQuestion = (num) => {
    if (num >= 0 && num < questions.length) {
      this.setState({
        displayModal: false,
        questionNum: num,
        result: '',
        testResults: [],
        errorMessage: '',
      }, () => {
        this.updateSolution(questions[num].initialSolution)
      });
    };
  }

  closeModal = () => {
    this.setState({
      displayModal: false
    });
  }

  componentDidMount = () => {
    const input = document.querySelector('body');
    input.addEventListener("keypress", (event) => {
      if ((event.keyCode === 10 || event.keyCode === 13) && event.ctrlKey) {
        this.run();
      }
    });
  }

  run = () => {
    if (!this.state.testResults.includes(false) && this.state.testResults.length !== 0) {
      this.changeQuestion(this.state.questionNum + 1);
      this.setState({ displayModal: false });
    } else {
      this.evalCode();
    }
  }

  updateSolution = (str) => {
    this.setState({ solution: str })
  }

  evalCode = () => {
    const code = document.getElementById('IDE').innerText.replace(/^([\d\n])+/, '');
    try {
      this.setState({
        // eslint-disable-next-line
        result: eval(code) || '',
        errorMessage: ''
      }, () => this.runTests())
    } catch (e) {
      if (e.message) this.setState({ errorMessage: e.message });
    }
  }

  runTests = () => {
    const { questionNum, solution, result } = this.state;
    const { testCases } = questions[questionNum];
    const testResults = [];

    testCases.forEach((el, i) => {
      // eslint-disable-next-line
      const test = new Function(['solution', 'result', 'isEqual'], el.function);
      testResults.push(test(solution, result, isEqual))
    });

    this.setState({ testResults }, () => {
      if (this.state.testResults.includes(false) && !this.state.errorMessage) this.setState({ errorMessage: 'To progress, you need to complete all the tests.' });
      if (this.state.testResults.length > 0 && !this.state.testResults.includes(false)) {
        this.setState({ displayModal: true })
      }
    })
  }

  render() {
    const { questionNum, result, errorMessage, testResults, solution } = this.state;
    const { question, initialSolution, completeSolution, testCases, hint } = questions[questionNum];
    return (
      <>
        {this.state.displayModal ? <Modal
          changeQuestion={this.changeQuestion}
          questionNum={questionNum}
          closeModal={this.closeModal}
        /> : ''}

        <div className="course-grid">

          <div className="full-width">
            <h1 style={{ color: '#555' }}>Lesson: <em>Arrays</em></h1>
            <hr />
          </div>

          <div>
            <Question
              questionNum={questionNum}
              question={question}
              hint={hint}
            />
          </div>

          <div className="ide-grid">
            <Solution
              id="IDE"
              initialSolution={initialSolution}
              completeSolution={completeSolution}
              run={this.run}
              result={result}
              errorMessage={errorMessage}
              updateSolution={this.updateSolution}
              solution={solution}
              testResults={testResults}
            />
          </div>

          <div style={{
            marginBottom: '50px'
          }}>
            <Tests
              testCases={testCases}
              testResults={testResults}
            />
          </div>

        </div>
      </>
    )
  }
}
