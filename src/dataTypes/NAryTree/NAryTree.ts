export class NaryTree {
  val: number;
  children: NaryTree[];
  constructor(val: number = 0, children: NaryTree[] = []) {
    this.val = val;
    this.children = children;
  }
}
