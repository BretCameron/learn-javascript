const _ = require('lodash');
const { NodeVM } = require('vm2');
const express = require('express');
const router = express.Router();

const findInMap = (map, val) => {
  for (let [k, v] of map) {
    if (v === val) {
      return true;
    }
  }
  return false;
};

const getTestSummary = (map) => {
  let tests = map.size || map.length, passed = 0, failed = 0;
  for (let [k, v] of map) {
    if (v === true) passed++;
    if (v === false) failed++;
  };
  const round = (value, precision = 1) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  };
  return {
    tests,
    passed: `${passed} (${round(passed / tests * 100)}%)`,
    failed: `${failed} (${round(failed / tests * 100)}%)`,
  };
};


router.post('/submit', (req, res) => {

  let { functionName, userSolutionString, courseSolutionString, testFunctionString } = req.body;

  /** Ensure User-Submitted Strings End with a Semicolon */
  const ensureFinalSemicolon = (str) => /;$/.test(str) ? str : str + ';';

  userSolutionString = ensureFinalSemicolon(userSolutionString);
  courseSolutionString = ensureFinalSemicolon(courseSolutionString);
  testFunctionString = ensureFinalSemicolon(testFunctionString);

  /** Create Sandbox, with Lodash as the Only Allowed Dependency */
  const vm = new NodeVM({
    console: 'inherit',
    sandbox: {},
    require: {
      external: {
        modules: ['lodash'],
      },
      root: './',
    }
  });

  /** Try to Run the User's Solution, the Pre-Defined Course Solution and the Pre-Defined Test Function - and Report Any Errors to the Console */
  try {
    const userSolution = vm.run(userSolutionString + "module.exports = " + functionName + ";");
    const courseSolution = vm.run(courseSolutionString + "module.exports = " + functionName + ";");
    const testFunction = vm.run("var _ = require('lodash');" + testFunctionString + "module.exports = test;", 'vm.js');

    /** By default, the testResult function should return a map, whether the key is a case and the value is a boolean */
    const testResult = [...testFunction(userSolution, courseSolution, userSolutionString)];
    res.json({
      /** If any value is false, the solution does not pass */
      pass: !findInMap(testResult, false),
      summary: getTestSummary(testResult),
      tests: testResult
    });
  } catch (err) {
    res.json({
      pass: false,
      summary: null,
      tests: null,
      message: String(err)
    });
  };

});

module.exports = router;
