import { describe, expect, test } from '@jest/globals';
import { longestCommonPrefix } from './longestCommonPrefix';

describe('Add Two Numbers', () => {
  test('', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toEqual('fl');
  });
  test('', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toEqual('');
  });
  test('', () => {
    expect(
      longestCommonPrefix(['playgroung', 'playstation', 'playgarden'])
    ).toEqual('play');
  });
});
