import { describe, expect, test } from '@jest/globals';
import {
  FixedQueue,
  FixedQueue2,
  QueueEmptyError,
  QueueFullError,
} from './queueFixed';

describe('queue class', () => {
  //Queue value | Error
  test('queue should be empty on creation', () => {
    const newQueue = new FixedQueue<string>(5);
    expect(newQueue.isEmpty()).toBe(true);
  });

  test('Queue pop should throw error on empty Queue', () => {
    const newQueue = new FixedQueue<number>(5);
    expect(() => newQueue.peek()).toThrow(QueueEmptyError);
  });
  test('queue should return a value and be empty after adding an item', () => {
    const newQueue = new FixedQueue<string>(5);
    newQueue.enqueue('soy el primero');
    expect(newQueue.dequeue()).toBe('soy el primero');
    expect(newQueue.isEmpty()).toBe(true);
  });
  test('Queue dequeue should throw error on empty Queue', () => {
    const newQueue = new FixedQueue<number>(5);
    expect(() => newQueue.dequeue()).toThrow(QueueEmptyError);
  });
  test('FixedQueue push should throw error on full FixedQueue', () => {
    const newQueue = new FixedQueue<number>(5);
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue(5);
    expect(() => newQueue.enqueue(1)).toThrow(QueueFullError);
  });
  test('FixedQueue isFull should return false if FixedQueue is not full', () => {
    const newQueue = new FixedQueue<number>(5);
    expect(newQueue.isFull()).toBe(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toBe(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toBe(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toBe(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toBe(false);
  });

  test('FixedQueue isFull should return true if FixedQueue is full', () => {
    const newQueue = new FixedQueue<number>(5);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toBe(true);
  });

  test('FixedQueue dequeue should return the last element added', () => {
    const newQueue = new FixedQueue<number>(5);
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue(5);
    expect(newQueue.dequeue()).toBe(1);
    expect(newQueue.dequeue()).toBe(2);
    newQueue.enqueue(10);
    newQueue.enqueue(20);
    expect(newQueue.dequeue()).toBe(3);
    expect(newQueue.dequeue()).toBe(4);
    expect(newQueue.dequeue()).toBe(5);

    expect(newQueue.dequeue()).toBe(10);
    expect(newQueue.dequeue()).toBe(20);
    expect(newQueue.isEmpty()).toBe(true);
  });
  //   //Queue2 { succes, element }
  test('FixedQueue2 should be empty on creation', () => {
    const newQueue = new FixedQueue2<number>(5);
    expect(newQueue.isEmpty()).toBe(true);
  });
  test('FixedQueue2 peek should throw success false on empty FixedQueue', () => {
    const newQueue = new FixedQueue2<number>(5);
    expect(newQueue.peek()).toEqual({ success: false });
  });
  test('FixedQueue2 dequeue should throw success false on empty FixedQueue', () => {
    const newQueue = new FixedQueue2<number>(5);
    expect(newQueue.dequeue()).toEqual({ success: false });
  });
  test('FixedQueue2 enqueue should throw success false on full FixedQueue', () => {
    const newQueue = new FixedQueue2<number>(5);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    expect(newQueue.enqueue(1)).toEqual({ success: false });
  });

  test('FixedQueue2 enqueue should throw success true on element adition', () => {
    const newQueue = new FixedQueue2<number>(5);
    expect(newQueue.enqueue(1)).toEqual({ success: true });
    expect(newQueue.enqueue(2)).toEqual({ success: true });
    expect(newQueue.enqueue(3)).toEqual({ success: true });
    expect(newQueue.enqueue(4)).toEqual({ success: true });
    expect(newQueue.enqueue(5)).toEqual({ success: true });
  });
  test('FixedQueue2 dequeue should return the last element added', () => {
    const newQueue = new FixedQueue2<number>(5);
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.enqueue(5);
    expect(newQueue.dequeue()).toEqual({ success: true, element: 1 });
    expect(newQueue.dequeue()).toEqual({ success: true, element: 2 });
    expect(newQueue.dequeue()).toEqual({ success: true, element: 3 });
    expect(newQueue.dequeue()).toEqual({ success: true, element: 4 });
    expect(newQueue.dequeue()).toEqual({ success: true, element: 5 });
  });
  test('FixedQueue2 peek should return the first element added', () => {
    const newQueue = new FixedQueue2<number>(5);
    newQueue.enqueue(1);
    expect(newQueue.peek()).toEqual({ success: true, element: 1 });
    newQueue.enqueue(2);
    expect(newQueue.peek()).toEqual({ success: true, element: 1 });
    newQueue.enqueue(3);
    expect(newQueue.peek()).toEqual({ success: true, element: 1 });
    newQueue.enqueue(4);
    expect(newQueue.peek()).toEqual({ success: true, element: 1 });
    newQueue.enqueue(5);
    expect(newQueue.peek()).toEqual({ success: true, element: 1 });
    newQueue.dequeue();
    expect(newQueue.peek()).toEqual({ success: true, element: 2 });
    expect(newQueue.peek()).toEqual({ success: true, element: 2 });
    expect(newQueue.peek()).toEqual({ success: true, element: 2 });
  });
  test('FixedQueue2 isFull should return true on full FixedQueue', () => {
    const newQueue = new FixedQueue2<number>(5);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toBe(true);
  });
  test('FixedQueue2 isFull should return false on full FixedQueue', () => {
    const newQueue = new FixedQueue2<number>(5);
    expect(newQueue.isFull()).toEqual(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toEqual(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toEqual(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toEqual(false);
    newQueue.enqueue(1);
    expect(newQueue.isFull()).toEqual(false);
  });
});
