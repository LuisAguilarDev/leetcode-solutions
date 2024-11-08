import { sumOfPrimes } from './sumOfPrimes';

describe('Sum of n primes', () => {
  test('#1 It should return the sum of all primes until n', () => {
    expect(sumOfPrimes(10)).toEqual(17);
  });
  test('#1 It should return the sum of all primes until n', () => {
    expect(sumOfPrimes(11)).toEqual(28);
  });
  test('#2 It should return the sum of all primes until n', () => {
    expect(sumOfPrimes(20)).toEqual(77);
  });
  test('#3 It should return the sum of all primes until n', () => {
    expect(sumOfPrimes(30)).toEqual(129);
  });
  test('#4 It should return the sum of all primes until n', () => {
    expect(sumOfPrimes(1)).toEqual(0);
  });
  test('#5 It should return the sum of all primes until n', () => {
    expect(sumOfPrimes(0)).toEqual(0);
  });
  test('#6 It should return the sum of all primes until n', () => {
    expect(sumOfPrimes(2)).toEqual(2);
  });
});
