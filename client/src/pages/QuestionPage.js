import React from 'react';
import axios from 'axios';

import Question from '../components/Question';
import Solution from '../components/Solution';
// import Tests from '../components/Tests';
import Tests2 from '../components/Tests2';
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
        const { pass, tests, summary } = res.data;
        this.setState({ pass, tests, summary, tab: 'tests-tab' }, () => console.log(this.state));
      })
  }

  runTests = () => {

  };

  // runTests = () => {
  //   const { questionNum, solution, result } = this.state;
  //   const { testCases } = questions[questionNum];
  //   const testResults = [];

  //   testCases.forEach((el, i) => {
  //     // eslint-disable-next-line
  //     const test = new Function(['solution', 'result', 'isEqual'], el.function);
  //     testResults.push(test(solution, result, isEqual))
  //   });

  //   this.setState({ testResults }, () => {
  //     if (this.state.testResults.includes(false) && !this.state.errorMessage) this.setState({ errorMessage: 'To progress, you need to complete all the tests.' });
  //     if (this.state.testResults.length > 0 && !this.state.testResults.includes(false)) {
  //       this.setState({ displayModal: true })
  //     }
  //   })
  // }

  render() {
    const { questionNum, result, tests, solution, summary } = this.state;
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
            <div>
              <ul className="tabs">
                <li id="question-tab" onClick={this.switchTabs} className={this.state.tab === "question-tab" ? "selected" : ""}><h2>Question</h2></li>
                <li id="tests-tab" onClick={this.switchTabs} className={this.state.tab === "tests-tab" ? "selected" : ""}><h2>Tests</h2></li>
              </ul>
            </div>
            <div style={{
              minHeight: 'calc(100% - 170px)'
            }}>
              {this.state.tab === "question-tab" ? <Question
                questionNum={questionNum}
                question={question}
                hint={hint}
              /> : <Tests2
                  tests={tests}
                  summary={summary}
                />}
            </div>

          </div>

          <div className="ide-grid">
            <Solution
              id="IDE"
              initialSolution={initialSolution}
              run={this.run}
              result={result}
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
