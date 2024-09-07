import { describe, expect, test } from '@jest/globals';
import { FixedQueue } from './queueFixed';

describe('queue class', () => {
  test('queue should be empty on creation', () => {
    const newQueue = new FixedQueue(5);
    expect(newQueue.isEmpty()).toBe(true);
  });
  test('queue should return a value and be empty after adding an item', () => {
    const newQueue = new FixedQueue(5);
    newQueue.enqueue('soy el primero');
    expect(newQueue.dequeue()).toBe('soy el primero');
    expect(newQueue.isEmpty()).toBe(true);
  });
});
