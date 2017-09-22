import t from 'ava';

import checkValidString from './index';

t.test('Valid_Parenthesis_String', t => {
  t.true(checkValidString(''));
  t.true(checkValidString('(*)'));
  t.true(checkValidString('(*))'));
  t.true(checkValidString('(((*))'));
  t.true(checkValidString('((*)))'));
  t.true(checkValidString('((*))'));

  t.false(checkValidString(')('));
});
