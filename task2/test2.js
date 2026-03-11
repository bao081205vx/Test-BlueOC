const { sumTopTwo } = require('./task2');

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

assertEqual(sumTopTwo([1, 4, 2, 3, 5]), 9, 'sumTopTwo - basic');
assertEqual(sumTopTwo([5]), 5, 'sumTopTwo - single element');
assertEqual(sumTopTwo([]), 0, 'sumTopTwo - empty array');
assertEqual(sumTopTwo([-2, -5, -1]), -3, 'sumTopTwo - negatives');
assertEqual(sumTopTwo([3, 3, 3]), 6, 'sumTopTwo - duplicates');

console.log('Task2 tests executed.');
