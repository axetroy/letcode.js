import t from 'ava';

import main from './index';

t.test('test case', t => {
  t.deepEqual(main([3, 2, 4], 6), [1, 2]);
  t.deepEqual(main([2, 7, 11, 15], 9), [0, 1]);
});
