export class QueueFullError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QueueFullError';
  }
}
export class QueueEmptyError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QueueEmptyError';
  }
}
export class QueueNullsNotAllowedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'QueueNullsNotAllowedError';
  }
}
interface queueResponse<T> {
  success: boolean;
  element?: T | null;
}

export class FixedQueue<T> {
  private items: (T | null)[];
  private head: number;
  private tail: number;

  constructor(maxSize: number) {
    this.items = new Array<T | null>(maxSize).fill(null);
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item: T): QueueFullError | void {
    if (this.isFull()) {
      throw new QueueFullError('Queue is Full');
    }
    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.items.length;
  }

  dequeue(): T | QueueEmptyError {
    if (this.isEmpty()) {
      throw new QueueEmptyError('Queue is Empty');
    }
    const item = this.items[this.head];
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.items.length;
    return item!;
  }

  peek(): T | QueueEmptyError {
    if (this.isEmpty()) {
      throw new QueueEmptyError('Queue is Empty');
    }
    return this.items[this.head]!;
  }

  isEmpty(): boolean {
    return this.head === this.tail && !this.items[this.tail];
  }

  isFull(): boolean {
    return this.items[this.tail] !== null;
  }
}

export class FixedQueue2<T> {
  private items: (T | null)[];
  private head: number;
  private tail: number;

  constructor(maxSize: number) {
    this.items = new Array<T | null>(maxSize).fill(null);
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item: T): queueResponse<T> {
    if (this.isFull()) {
      return { success: false };
    }
    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.items.length;
    return { success: true };
  }

  dequeue(): queueResponse<T> {
    if (this.isEmpty()) {
      return { success: false };
    }
    const item = this.items[this.head];
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.items.length;
    return { success: true, element: item };
  }

  peek(): queueResponse<T> {
    if (this.isEmpty()) {
      return { success: false };
    }
    return { success: true, element: this.items[this.head] };
  }

  isEmpty(): boolean {
    return this.items[this.head] === null;
  }

  isFull(): boolean {
    return this.items[this.tail] !== null;
  }
}
