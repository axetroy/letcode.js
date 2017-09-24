import t from 'ava';

import main from './index';

t.test('test case', t => {
  t.deepEqual(main('abc123'), 123);
  t.deepEqual(main('+'), 0);
  t.deepEqual(main('-1'), -1);
  t.deepEqual(main('+-2'), 0);
  t.deepEqual(main('2147483648'), 2147483647);
  t.deepEqual(main('-2147483649'), -2147483648);
  t.deepEqual(main('   - 321'), 0);
  // t.deepEqual(main(' b11228552307'), 0);
});
