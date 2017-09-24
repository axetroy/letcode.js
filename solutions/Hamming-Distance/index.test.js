import t from 'ava';

import main from './index';

t.test('test case', t => {
  t.deepEqual(main(1, 4), 2);
});
