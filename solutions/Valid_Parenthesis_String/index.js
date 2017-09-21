module.exports = function main(input) {
  if (input === '') {
    return true;
  }
  if (!/[\(\)\*]{2,}/.test(input)) {
    return false;
  }

  const arr1 = input.split('');
  const arr2 = input.split('').reverse();
  const isOdd = input.length % 2 === 0;
  const middle = parseInt(isOdd ? arr1.length / 2 : arr1.length / 2 + 1);

  for (let i = 0; i < middle - 1; i++) {
    if (!isOdd && i === middle) {
      return arr1[i] === '*';
    } else {
      if (!['*', '('].includes(arr1[i]) || !['*', ')'].includes(arr2[i])) {
        return false;
      }
    }
  }

  return true;
};
