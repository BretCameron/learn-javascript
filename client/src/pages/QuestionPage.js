import React from 'react';
import axios from 'axios';

import Question from '../components/Question';
import Solution from '../components/Solution';
// import Tests from '../components/Tests';
import Tests from '../components/Tests';
import Modal from '../components/Modal';

// import { isEqual } from '../helpers/isEqual';
import questions from '../data/questions';

export default class QuestionPage extends React.Component {
  state = {
    pass: false,
    tests: [],
    questionNum: 0,
    solution: '',
    result: '',
    displayModal: false,
    tab: 'question-tab',
    summary: {},
  }

  switchTabs = (e) => {
    this.setState({ tab: e.currentTarget.id });
  }

  changeQuestion = (num) => {
    if (num >= 0 && num < questions.length) {
      this.setState({
        displayModal: false,
        questionNum: num,
        result: '',
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
    // if (!this.state.testResults.includes(false) && this.state.testResults.length !== 0) {
    //   this.changeQuestion(this.state.questionNum + 1);
    //   this.setState({ displayModal: false });
    // } else {
    this.evalCode();
    // }
  }

  updateSolution = (str) => {
    this.setState({ solution: str })
  }

  evalCode = () => {
    const { solution, questionNum } = this.state;
    const { functionName, courseSolutionString, testFunctionString } = questions[questionNum];

    axios.post('/evaluate/submit', {
      functionName,
      userSolutionString: String(solution),
      courseSolutionString,
      testFunctionString,
    })
      .then(res => {
        const { pass, tests, summary, message } = res.data;
        this.setState({ pass, tests, summary, message, tab: 'tests-tab' }, () => console.log(this.state));
      })
  }

  render() {
    const { questionNum, result, tests, solution, summary, message, pass } = this.state;
    const { question, initialSolution, hint } = questions[questionNum];
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

          <div style={{
            height: '100%',
            gridRow: '2 / 4'
          }}>
            <div style={{
              position: 'relative'
            }}>
              <ul className="tabs">
                <div>
                  <li id="question-tab" onClick={this.switchTabs} className={this.state.tab === "question-tab" ? "selected" : ""}><h3>Question {questionNum + 1}</h3>
                  </li>
                  <div style={{
                    background: '#FFF',
                    position: 'absolute',
                    bottom: '-10px',
                    width: 'calc(100% - 30px)',
                    height: '10px'
                  }}></div>
                </div>
                <div>
                  <li id="tests-tab" onClick={this.switchTabs} className={this.state.tab === "tests-tab" ? "selected" : ""}><h3>Output</h3></li>
                </div>
              </ul>
            </div>
            <div style={{
              minHeight: '500px',
              // border: '1px solid lightgrey',
              boxShadow: '2px 2px 7px rgba(0,0,0,0.3)',
              marginBottom: '20px',
            }}>
              {this.state.tab === "question-tab" ? <Question
                questionNum={questionNum}
                question={question}
                hint={hint}
              /> : <Tests
                  tests={tests}
                  summary={summary}
                  message={message}
                />}
            </div>

          </div>

          <div className="ide-grid">
            <Solution
              id="IDE"
              initialSolution={initialSolution}
              run={this.run}
              result={result}
              pass={pass}
              updateSolution={this.updateSolution}
              solution={solution}
            />
          </div>

          {/* <div style={{
            marginBottom: '50px'
          }}> */}
          {/* <Tests
              testCases={testCases}
              testResults={testResults}
            /> */}
          {/* </div> */}

        </div>
      </>
    )
  }
}
