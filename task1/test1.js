const { mostFrequentLengthStrings } = require('./task1');

function assertEqual(actual, expected, name) {
  const aStr = JSON.stringify(actual);
  const eStr = JSON.stringify(expected);
  if (aStr === eStr) {
    console.log(`PASS - ${name} => PASS`);
  } else {
    console.error(`FAIL - ${name} => expected ${eStr} but got ${aStr}`);
    process.exitCode = 1;
  }
}

assertEqual(
  mostFrequentLengthStrings(['a', 'ab', 'abc', 'cd', 'def', 'gh']),
  ['ab', 'cd', 'gh'],
  'Test1'
);

assertEqual(
  mostFrequentLengthStrings(['one', 'two', 'six', 'ten']),
  ['one', 'two', 'six', 'ten'],
  'Test2'
);

assertEqual(
  mostFrequentLengthStrings([]),
  [],
  'Test3'
);
assertEqual(
  mostFrequentLengthStrings(['a', 'bb', 'ccc', 'dd', 'eee', 'f']),
  ['a','bb','ccc','dd','eee','f'],
  'Test4'
);

console.log('Task1 tests executed.');
