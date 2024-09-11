//Tienes que insertar una lista L1 en otra lista L2.  Te doy dos cosas extra : una posición (un número) y una dirección ( izquierda o derecha).  Entonces tienes que insertar L2 en L1 a la izquierda o la derecha del nodo en la posición N.  La función es así:

// Fn F( L1, L2, pos(3), dir(izq) ) —> ListNode

// Vamos a cambiar la definición de un ListNode también. Ahora tu ListNode contiene dos punteros - el vecino de la derecha y el vecino de la izquierda

export class ListNode {
  val: number;
  next: ListNode | null;
  prev: ListNode | null;
  constructor(
    val: number,
    next: ListNode | null = null,
    prev: ListNode | null = null
  ) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

// L1 = [5,4,3,2,1]

// L2 = [4,6]

//insertList(L1,L2,3,"izq")--> = [5,4,3-next=null] , [ 2,1] = [5,4,3,2,4,6,2,1]
//insertList(L1,L2,3,"der")--> = [5,4,3,2] , [1] = [5,4,3,2,2,4,6,1]
export enum dir {
  izq,
  der,
}

export function insertList(
  l1: ListNode | null,
  l2: ListNode | null,
  position: number,
  direction: dir
): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;
  let index = 0;
  let head = l1;
  while (index !== position && l1) {
    l1 = l1.next;
    index++;
  }

  if (direction === dir.izq) {
    if (position !== 0) {
      l1 = l1?.prev || null;
    } else {
      head = l2;
      while (l2?.next) {
        l2 = l2.next;
      }
      l2.next = l1;
      l1!.prev = l2;
      return head;
    }
  }
  const tail = l1?.next || null;
  if (l1) {
    l2.prev = l1;
    l1.next = l2;
  }
  while (l2?.next) {
    l2 = l2.next;
  }
  if (tail) {
    tail.prev = l2;
    l2.next = tail;
  }
  return head;
}

export const arrayToListNode = (arrayData: Array<number>): ListNode => {
  let current: ListNode | null = null;
  let list1: ListNode;

  for (const data of arrayData) {
    if (current === null) {
      current = new ListNode(data);
      list1 = current;
    } else {
      current.next = new ListNode(data, null, current);
      current = current.next;
    }
  }
  return list1!;
};

export const listNodeToArray = (list: ListNode | null): Array<number> => {
  const array: Array<number> = [];
  while (list) {
    array.push(list.val);
    list = list.next;
  }
  return array;
};
