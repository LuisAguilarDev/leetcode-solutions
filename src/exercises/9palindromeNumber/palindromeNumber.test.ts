import { describe, expect, test } from '@jest/globals';
import { isPalindrome } from './palindromeNumber';

describe('Palindrome Number', () => {
  test('', () => {
    expect(isPalindrome(342)).toEqual(false);
  });
  test('', () => {
    expect(isPalindrome(343)).toEqual(true);
  });
  test('', () => {
    expect(isPalindrome(-100)).toEqual(false);
  });
  test('', () => {
    expect(isPalindrome(121)).toEqual(true);
  });
  test('', () => {
    expect(isPalindrome(-121)).toEqual(false);
  });
  test('', () => {
    expect(isPalindrome(10)).toEqual(false);
  });
});
