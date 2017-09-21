import t from 'ava';

import main from './index';

t.test('Valid_Parenthesis_String', t => {
  t.true(main(''));
  t.true(main('(*)'));
});
