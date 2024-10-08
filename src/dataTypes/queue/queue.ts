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
    return this.items[this.head] === null;
  }

  isFull(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    return this.tail % this.items.length === this.head;
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
    this.tail = (this.tail + 1) % (this.items.length + 1);
    return { success: true };
  }

  dequeue(): queueResponse<T> {
    if (this.isEmpty()) {
      return { success: false };
    }
    const item = this.items[this.head];
    this.head = (this.head + 1) % (this.items.length + 1);
    return { success: true, element: item };
  }

  peek(): queueResponse<T> {
    if (this.isEmpty()) {
      return { success: false };
    }
    return { success: true, element: this.items[this.head] };
  }

  isEmpty(): boolean {
    return this.head === this.tail;
  }

  isFull(): boolean {
    return (this.tail + 1) % (this.items.length + 1) === this.head;
  }
}

export class DinamycQueue<T> {
  private items: (T | null)[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift() ?? null;
  }

  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.at(-1) ?? null;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}
