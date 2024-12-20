//Arquitectura Registro-Registro - Arquitectura Registros de propósito general
export class VirtualMachine {
  #registers:{
    [key: number]: number;
  };
  #instructionSet:{
    [key: number]: Function;
  }
  #ram:number[];
  #programCounter:number;
  constructor(){
    this.#registers = { 0x00: 0, 0x01: 0 };
    this.#ram = Array(256).fill(0);
    this.#programCounter = 0;
    this.#instructionSet = {
      0x01: this.#LOAD.bind(this),
      0x02: this.#STORE.bind(this),
      0x03: this.#ADD.bind(this),
      0x04: this.#SUB.bind(this),
      0x05: this.#INC.bind(this),
      0x06: this.#JMP.bind(this),
      0x07: this.#JZ.bind(this),
      0x08: this.#HALT.bind(this),
    };
  }
  #LOAD(RegisterAddress:number, Operand:number) {
    this.#registers[RegisterAddress] = this.#ram[Operand];
  }
  #STORE(RegisterAddress:number, Operand:number) {
    this.#ram[Operand] = this.#registers[RegisterAddress];
  }
  #ADD(RegisterAddress:number, Operand:number) {
    this.#registers[RegisterAddress] += this.#registers[Operand];
  }
  #SUB(RegisterAddress:number, Operand:number) {
    this.#registers[RegisterAddress] -= Operand;
  }
  #INC(RegisterAddress:number) {
    this.#registers[RegisterAddress]++;
  }
  #JMP(Operand:number) {
    this.#programCounter = Operand;
  }
  #JZ(RegisterAddress:number,Operand:number) {
    if (this.#registers[RegisterAddress] === 0) {
      this.#programCounter = Operand;
      return
    }
    this.#programCounter += 3;
  }
  #HALT() {
    console.log("Program halted.");
  }
  
  storeInMemory(address:number, number:number) {
    this.#ram[address] = number;
  }
  getFromMemory(address:number) {
    return this.#ram[address];
  }

  loadProgram(program:number[]) {
    for (let i = 0; i < program.length; i++) {
      this.#ram[i] = program[i];
    }
  }

  executeProgram() {
    this.#programCounter = 0;
    while (true) {
      const opcode = this.#ram[this.#programCounter];
      const operand = this.#ram[this.#programCounter + 1];
      const registerAddress = this.#ram[this.#programCounter + 2];
      this.#instructionSet[opcode](operand, registerAddress);
      if (opcode === 0x08) {
        break;
      }
      if (opcode === 0x06 || opcode === 0x07) {
        continue
      }
      this.#programCounter += 3;
    }
  }
}

