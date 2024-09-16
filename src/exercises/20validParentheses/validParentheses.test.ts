import { isValid } from './validParentheses';

describe('Merge two sorted list', () => {
  test('#1 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('()')).toEqual(true);
  });
  test('#2 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('()[]{}')).toEqual(true);
  });
  test('#3 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('(]')).toEqual(false);
  });
  test('#4 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('([])')).toEqual(true);
  });
  test('#5 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('(')).toEqual(false);
  });
  test('#5 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid(')')).toEqual(false);
  });
  test('#5 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid(')))')).toEqual(false);
  });
  test('#5 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('(((')).toEqual(false);
  });
  test('#5 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('((()))()')).toEqual(true);
  });
  test('#5 Should validate if every close bracket has a corresponding open bracket of the same type.', () => {
    expect(isValid('((()()')).toEqual(false);
  });
});
