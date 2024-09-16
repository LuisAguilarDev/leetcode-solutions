import { dynamicStack } from '../../other excercises/stack/stackFixed';

export function isValid(s: string): boolean {
  const symbolsDictionary: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  } as const;

  const stack = new dynamicStack();
  for (const symbol of s) {
    if (symbolsDictionary[symbol]) {
      stack.push(symbol);
    } else {
      const lastOpen = stack.pop();
      if (symbolsDictionary[lastOpen as string] !== symbol) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
