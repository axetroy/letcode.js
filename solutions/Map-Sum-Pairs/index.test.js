import t from 'ava';

import MapSum from './index';

t.test('Map Sum Pairs', t => {
  const o = new MapSum();

  t.deepEqual(o.insert('apple', 3), null);
  t.deepEqual(o.sum('ap'), 3);
  t.deepEqual(o.insert('app', 2), null);
  t.deepEqual(o.sum('ap'), 5);
});
