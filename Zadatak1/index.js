const functions = require('./functions');
const testCases =  require('./config');
const testCases4 = testCases.testFunc4;
const testCases3 = testCases.testFunc3;
const testCases2 = testCases.testFunc2;
const testCases1 = testCases.testFunc1;
const random = functions.random;
const minIntegerFromArray = functions.minIntegerFromArray;
const minIntegerFromString = functions.minIntegerFromString;
const concatStringsByLength = functions.concatStringsByLength;

testCases1.forEach(testCase => {
   console.log(random(testCase.x, testCase.y));
});


testCases2.forEach(testCase => {
    console.log(minIntegerFromArray(testCase));
});

testCases3.forEach(testCase => {
    console.log(minIntegerFromString(testCase));
});

testCases4.forEach(testCase => {
    console.log(concatStringsByLength(testCase.x, testCase.y));
});


