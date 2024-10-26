//Arquitectura Registro-Registro - Arquitectura Registros de propósito general
export class ExtendedVirtualMachine {
  #registers: {
    [key: number]: number;
  };
  #instructionSet: {
    [key: number]: Function;
  };
  #ram: number[];
  #programCounter: number;
  #stackPointer: number;
  #basePointer: number;
  #flags: number;
  constructor() {
    this.#registers = { 0x00: 0, 0x01: 0, 0x02: 0, 0x03: 0 };
    this.#ram = Array(256).fill(0);
    this.#programCounter = 0;
    this.#stackPointer = 0;
    this.#basePointer = 0;
    this.#flags = 0b0000;
    this.#instructionSet = {
      0x01: this.#LOAD.bind(this),
      0x02: this.#STORE.bind(this),
      0x03: this.#MOV.bind(this),
      0x04: this.#ADD.bind(this),
      0x05: this.#SUB.bind(this),
      0x06: this.#MUL.bind(this),
      0x07: this.#DIV.bind(this),
      0x08: this.#CMP.bind(this),
      0x09: this.#JMP.bind(this),
      0x0a: this.#JE.bind(this),
      0x0b: this.#JNE.bind(this),
      0x0c: this.#PUSH.bind(this),
      0x0d: this.#POP.bind(this),
      0x0e: this.#CALL.bind(this),
      0x0f: this.#RET.bind(this),
      0x10: this.#NOP.bind(this),
      0x11: this.#HALT.bind(this),
    };
  }
  #LOAD(registerAddress: number, address: number) {
    console.log(this.#ram[address]);
    this.#registers[registerAddress] = this.#ram[address];
  }
  #STORE(registerAddress: number, address: number) {
    this.#ram[address] = this.#registers[registerAddress];
  }
  #MOV(source: number, destination: number) {
    this.#registers[destination] = this.#registers[source];
  }
  #ADD(RegisterAddress1: number, RegisterAddress2: number) {
    this.#registers[RegisterAddress1] += this.#registers[RegisterAddress2];
  }
  #SUB(address1: number, address2: number) {
    this.#registers[address1] -= this.#registers[address2];
  }
  #MUL(address1: number, address2: number) {
    this.#registers[address1] =
      this.#registers[address1] * this.#registers[address2];
  }
  #DIV(address1: number, address2: number) {
    const quotient = Math.floor(
      this.#registers[address1] / this.#registers[address2],
    );
    const remainder = this.#registers[address1] % this.#registers[address2];
    this.#registers[address1] = quotient;
    this.#registers[address2] = remainder;
  }
  #CMP(address1: number, address2: number) {
    //3210
    //(OF)-(CF)-(SF)-(ZF)
    const result = this.#registers[address1] - this.#registers[address2];
    if (result === 0) {
      this.#setFlag(0);
    }
    if (result < 0) {
      this.#setFlag(1);
    }
    if (this.#registers[address1] < this.#registers[address2]) {
      this.#setFlag(2);
    }
    let A_sign = (this.#registers[address1] >> 31) & 1;
    let B_sign = (this.#registers[address2] >> 31) & 1;
    let result_sign = (result >> 31) & 1;
    if (A_sign !== B_sign && result_sign !== A_sign) {
      this.#setFlag(3);
    }
  }
  #JMP(_: any, address: number) {
    this.#programCounter = address;
  }
  #JE(_: any, address: number) {
    if ((this.#flags & 0b0001) === 0b0001) {
      this.#programCounter = address;
    }
  }
  #JNE(_: any, address: number) {
    if ((this.#flags & 0b0001) === 0b0000) {
      this.#programCounter = address;
    }
  }
  #PUSH(address: number, _?: number) {
    this.#ram[this.#ram.length - this.#stackPointer] = this.#registers[address];
    this.#stackPointer++;
  }
  #POP(address: number, _?: number) {
    this.#registers[address] = this.#ram[this.#ram.length - this.#stackPointer];
    this.#stackPointer++;
  }
  #CALL(_: number, address: number) {
    this.#ram[this.#ram.length - this.#stackPointer - 1] =
      this.#programCounter + 3;
    this.#stackPointer++;
    this.#programCounter = address;
    console.log('callto:', address);
  }
  #RET(_: number, __: number) {
    this.#stackPointer--;
    this.#programCounter = this.#ram[this.#ram.length - this.#stackPointer - 1];
  }
  #NOP(_: number, address: number) {
    //??;
  }
  #HALT() {
    console.log('Program halted.');
  }
  #setFlag(bitPosition: number) {
    this.#flags |= 1 << bitPosition;
  }
  storeInMemory(address: number, number: number) {
    this.#ram[address] = number;
  }
  getFromMemory(address: number) {
    return this.#ram[address];
  }

  loadProgram(program: number[]) {
    console.log(program.length);
    for (let i = 0; i < program.length; i++) {
      this.#ram[i] = program[i];
    }

    console.log(this.#ram.slice(0, 57));
  }

  executeProgram() {
    this.#programCounter = 0;
    let iteration = 0;
    while (true) {
      const opcode = this.#ram[this.#programCounter];
      const operand1 = this.#ram[this.#programCounter + 1];
      const operand2 = this.#ram[this.#programCounter + 2];
      this.#instructionSet[opcode](operand1, operand2);
      if (iteration === 20) {
        break;
      }
      console.log(iteration, {
        opcode,
        operand1,
        operand2,
        pc: this.#programCounter,
      });
      iteration++;
      if (opcode === 0x08) {
        break;
      }
      if ([0x0e, 0x0f, 0x06, 0x07].includes(opcode)) {
        continue;
      }
      this.#programCounter += 3;
    }
  }
}
