export class StackFullError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StackFullError';
  }
}
export class StackEmptyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StackEmptyError';
  }
}

export class Stack<T> {
  private items: (T | null)[];
  private current: number;

  constructor(length: number) {
    this.items = Array(length).fill(null);
    this.current = 0;
  }
  push(element: T): void | StackFullError {
    if (this.isFull()) {
      throw new StackFullError('Stack is full');
    }
    this.items[this.current] = element;
    this.current++;
  }
  pop(): T | StackEmptyError {
    if (this.isEmpty()) {
      throw new StackEmptyError('Stack is empty');
    }
    this.current--;
    return this.items[this.current]!;
  }
  peek(): T | StackEmptyError {
    if (this.isEmpty()) {
      throw new StackEmptyError('Stack is empty');
    }
    return this.items[this.current - 1]!;
  }
  isEmpty(): boolean {
    return this.current === 0;
  }
  isFull(): boolean {
    return this.current === this.items.length;
  }
}

interface stackResponse<T> {
  success: boolean;
  element?: T | null;
}
export class Stack2<T> {
  private items: (T | null)[];
  private current: number;

  constructor(length: number) {
    this.items = Array(length).fill(null);
    this.current = 0;
  }
  push(element: T): stackResponse<T> {
    if (this.isFull()) {
      return {
        success: false,
      };
    }
    this.items[this.current] = element;
    this.current++;
    return {
      success: true,
    };
  }
  pop(): stackResponse<T> {
    if (this.isEmpty()) {
      return {
        success: false,
      };
    }
    this.current--;
    return {
      success: true,
      element: this.items[this.current],
    };
  }
  peek(): stackResponse<T> {
    if (this.isEmpty()) {
      return {
        success: false,
      };
    }
    return {
      success: true,
      element: this.items[this.current - 1],
    };
  }
  isEmpty(): boolean {
    return this.current === 0;
  }
  isFull(): boolean {
    return this.current === this.items.length;
  }
}
