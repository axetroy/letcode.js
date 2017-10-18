import t from 'ava';

import missingNumber from './index';

t.test('test case', t => {
  t.deepEqual(missingNumber([0, 1, 3]), 2);
  t.deepEqual(missingNumber([0]), 1);
  t.deepEqual(missingNumber([1]), 0);
  t.deepEqual(missingNumber([0, 1]), 2);
});
