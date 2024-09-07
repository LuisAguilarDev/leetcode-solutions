export class FixedQueue<T> {
  private items: (T | null)[];
  private head: number;
  private tail: number;
  private size: number;
  private readonly maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.items = new Array<T | null>(maxSize).fill(null);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  values(): { items: (T | null)[]; max: number } {
    return { items: this.items, max: this.maxSize };
  }

  enqueue(item: T): string | void {
    if (this.size === this.maxSize) {
      return 'La cola está llena';
    }
    this.items[this.tail] = item;
    this.tail = (this.tail + 1) % this.maxSize;
    this.size++;
  }

  dequeue(): T | null {
    if (this.size === 0) {
      return null;
    }
    const item = this.items[this.head];
    this.items[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.size--;
    return item;
  }

  peek(): T | null {
    return this.items[this.head];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }
}
