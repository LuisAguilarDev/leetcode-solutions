export const longestCommonPrefix = function (strs: Array<string>): string {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let longest = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(longest)) {
      longest = longest.substring(0, longest.length - 1);
    }
    if (longest === '') {
      return '';
    }
  }
  return longest;
};
