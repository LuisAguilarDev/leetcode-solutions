export const isPalindrome = function (x: number): boolean {
  const string = x.toString();
  const largo = string.length;
  let index = 0;
  const maxIterations = Math.floor(string.length / 2);
  while (index < maxIterations) {
    if (string[index] === string[largo - index - 1]) {
      index++;
      continue;
    }
    return false;
  }
  return true;
};
