import { describe, expect, test } from '@jest/globals';
import { Stack, Stack2 } from './stackFixed';

describe('queue class', () => {
  test('queue should be empty on creation', () => {
    const newQueue = new Stack(5);
    expect(newQueue.isEmpty()).toBe(true);
  });
  test('queue should be empty on creation', () => {
    const newQueue = new Stack2(5);
    expect(newQueue.isEmpty()).toBe(true);
  });
});
