import t from 'ava';

import main from './index';

t.test('test case', t => {
  t.true(main('UD'));
  t.true(main('LR'));
  t.false(main('LL'));
});
