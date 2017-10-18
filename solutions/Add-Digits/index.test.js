import t from 'ava';

import addDigits from './index';

t.test('test case', t => {
  t.deepEqual(addDigits(38), 2);
  t.deepEqual(addDigits(10), 1);
  t.deepEqual(addDigits(11), 2);
});
