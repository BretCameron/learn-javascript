import React, { Component } from 'react';
import assert from 'assert';



export default class TestsPage extends Component {

  state = {
    tests: new Map()
  }

  runTest = async () => {

    return new Promise((resolve, reject) => {

      function evenAndOdd(arr) {
        return [arr.filter(el => el % 2 === 0).sort(), arr.filter(el => el % 2 === 1).sort()];
      };

      function solution(arr) {
        return [arr.filter(el => el % 2 === 0).sort(), arr.filter(el => el % 2 === 1).sort()];
      };

      const map = new Map();
      const tests = 10;

      for (let i = 0; i < tests; i++) {

        let randLength = parseInt(Math.random() * 19 + 1);
        let randArray = [...Array(randLength)].map(e => ~~(Math.random() * randLength));

        const test = async () => {
          return assert.deepEqual(evenAndOdd(randArray), solution(randArray));
        }

        const description = `evenAndOdd([${randArray}]) should return [[${solution(randArray)[0]}], [${solution(randArray)[1]}]]`;

        test()
          .then(() => {
            map.set(description, true);
            if (map.size === tests) {
              resolve(map);
            };
          })
          .catch(() => {
            map.set(description, false);
            if (map.size === tests) {
              resolve(map);
            };
          })
      }
    })

  }

  render() {
    this.runTest().then((item) => {
      console.log(item)
    });
    return (
      <div>
        <br />
        <button type="button" onClick={this.runTest}>Run Test</button>

        <ul style={{ fontFamily: 'monospace' }}>
          {[...this.state.tests].map((el, i) => {
            return (
              <li key={i} style={{ color: el[1] ? 'green' : 'red' }}>{el[0]}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
