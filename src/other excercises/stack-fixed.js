function Stack(length) {
  this.items = Array(length).fill(null);
  this.current = 0;
  //   this.values = () => {
  //     return { items: this.items, max: this.max };
  //   };
  this.push = (element) => {
    if (this.isFull()) {
      //   throw new BadRequestException('');
    }
    this.items[this.current] = element;
    this.current++;
  };
  this.pop = () => {
    if (this.isEmpty()) {
      // throw new BadRequestException('');
      // value
      // :responseType
      //implementar los test de ambas implentaciones
      // const responseType = {
      //     value
      //     exception
      // }
      // { value: null, success:0}
    }
    this.current--;
    return this.items[this.current];
    // { value: this.items[this.current], success:1}
  };
  this.peek = () => {
    //que pasa si esta vacio?
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.current - 1]; //undefined
  };
  this.isEmpty = () => {
    return this.current === 0;
  };
  this.isFull = () => {
    return this.current === this.items.length;
  };
}

const test = new Stack(5);
console.log(test.values());
test.push(5);
test.push(4);
test.push(3);
test.push(2);
test.push(1);
test.push(0);
console.log(test.values());
console.log(test.pop());
test.push(1);
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());
console.log(test.values());
test.push(0);
console.log(test.values());
console.log(test.pop());
console.log(test.values());
console.log(test.isEmpty());
console.log(test.peek());
console.log(test.isEmpty());
console.log(test.pop());
console.log(test.isEmpty());
console.log(test.values());
