// TODO: 算法未完成
module.exports = function main(input) {
  if (input === '') {
    return true;
  }
  if (!/[\(\)\*]{2}/.test(input)) {
    return false;
  }

  const arr = input.split('');

  const temp = [];

  for(let i in arr){
    const str = arr[i];
  }

  // valid

  return /^\(\*?\)$/.test(input);
};
