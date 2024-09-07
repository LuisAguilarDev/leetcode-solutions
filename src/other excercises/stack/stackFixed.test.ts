import { describe, expect, test } from '@jest/globals';
import { Stack, Stack2, StackEmptyError, StackFullError } from './stackFixed';

describe('stack implementation', () => {
  //Stack value | Error

  test('stack should be empty on creation', () => {
    const newStack = new Stack<number>(5);
    expect(newStack.isEmpty()).toBe(true);
  });
  test('stack pop should throw error on empty stack', () => {
    const newStack = new Stack<number>(5);
    expect(() => newStack.peek()).toThrow(StackEmptyError);
  });
  test('stack peek should throw error on empty stack', () => {
    const newStack = new Stack<number>(5);
    expect(() => newStack.peek()).toThrow(StackEmptyError);
  });
  test('stack push should throw error on full stack', () => {
    const newStack = new Stack<number>(5);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    expect(() => newStack.push(1)).toThrow(StackFullError);
  });
  test('stack isFull should return true if stack is full', () => {
    const newStack = new Stack<number>(5);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    expect(newStack.isFull()).toBe(true);
  });
  test('stack isFull should return false if stack is not full', () => {
    const newStack = new Stack<number>(5);
    expect(newStack.isFull()).toBe(false);
    newStack.push(1);
    expect(newStack.isFull()).toBe(false);
    newStack.push(1);
    expect(newStack.isFull()).toBe(false);
    newStack.push(1);
    expect(newStack.isFull()).toBe(false);
    newStack.push(1);
    expect(newStack.isFull()).toBe(false);
  });

  test('stack pop should return the last element added', () => {
    const newStack = new Stack<number>(5);
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.push(5);
    expect(newStack.pop()).toBe(5);
  });
  test('stack should return the last element added', () => {
    const newStack = new Stack<number>(5);
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.push(5);
    expect(newStack.pop()).toBe(5);
  });

  //Stack2 { succes, element }
  test('stack should be empty on creation', () => {
    const newStack = new Stack2<number>(5);
    expect(newStack.isEmpty()).toBe(true);
  });
  test('stack peek should throw success false on empty stack', () => {
    const newStack = new Stack2<number>(5);
    expect(newStack.peek()).toEqual({ success: false });
  });
  test('stack pop should throw success false on empty stack', () => {
    const newStack = new Stack2<number>(5);
    expect(newStack.pop()).toEqual({ success: false });
  });
  test('stack push should throw success false on full stack', () => {
    const newStack = new Stack2<number>(5);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    expect(newStack.push(1)).toEqual({ success: false });
  });

  test('stack push should throw success true on element adition', () => {
    const newStack = new Stack2<number>(5);
    expect(newStack.push(1)).toEqual({ success: true });
    expect(newStack.push(2)).toEqual({ success: true });
    expect(newStack.push(3)).toEqual({ success: true });
    expect(newStack.push(4)).toEqual({ success: true });
    expect(newStack.push(5)).toEqual({ success: true });
  });
  test('stack pop should return the last element added', () => {
    const newStack = new Stack2<number>(5);
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.push(5);
    expect(newStack.pop()).toEqual({ success: true, element: 5 });
    expect(newStack.pop()).toEqual({ success: true, element: 4 });
    expect(newStack.pop()).toEqual({ success: true, element: 3 });
    expect(newStack.pop()).toEqual({ success: true, element: 2 });
    expect(newStack.pop()).toEqual({ success: true, element: 1 });
  });
  test('stack peek should return the last element added', () => {
    const newStack = new Stack2<number>(5);
    newStack.push(1);
    newStack.push(2);
    newStack.push(3);
    newStack.push(4);
    newStack.push(5);
    expect(newStack.peek()).toEqual({ success: true, element: 5 });
    newStack.pop();
    expect(newStack.peek()).toEqual({ success: true, element: 4 });
    expect(newStack.peek()).toEqual({ success: true, element: 4 });
    expect(newStack.peek()).toEqual({ success: true, element: 4 });
  });
  test('stack isFull should return true on full stack', () => {
    const newStack = new Stack2<number>(5);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    newStack.push(1);
    expect(newStack.isFull()).toBe(true);
  });
  test('stack isFull should return false on full stack', () => {
    const newStack = new Stack2<number>(5);
    expect(newStack.isFull()).toEqual(false);
    newStack.push(1);
    expect(newStack.isFull()).toEqual(false);
    newStack.push(1);
    expect(newStack.isFull()).toEqual(false);
    newStack.push(1);
    expect(newStack.isFull()).toEqual(false);
    newStack.push(1);
    expect(newStack.isFull()).toEqual(false);
  });
});
