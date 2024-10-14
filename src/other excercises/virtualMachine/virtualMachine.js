//Arquitectura Registro-Registro - Arquitectura Registros de propósito general
class VirtualMachine {
  #registers = { 0x00: 0, 0x01: 0 };
  #ram = Array(256).fill(0);
  #programCounter = 0;
  #instructionSet = {
    0x01: function LOAD(RegisterAddress, Operand) {
      this.#registers[RegisterAddress] = this.#ram[Operand];
    }.bind(this),
    0x02: function STORE(RegisterAddress, Operand) {
      this.#ram[Operand] = this.#registers[RegisterAddress];
    }.bind(this),
    0x03: function ADD(RegisterAddress, Operand) {
      this.#registers[RegisterAddress] += this.#registers[Operand];
    }.bind(this),
    0x04: function SUB(RegisterAddress, Operand) {
      this.#registers[RegisterAddress] -= this.#registers[Operand];
    }.bind(this),
    0x05: function INC(RegisterAddress) {
      this.#registers[RegisterAddress]++;
    }.bind(this),
    0x06: function JMP(RegisterAddress) {
      this.#programCounter = RegisterAddress;
    }.bind(this),
    0x07: function JZ(RegisterAddress) {
      if (this.#registers[0x00] === 0) {
        this.#programCounter = RegisterAddress;
      }
    }.bind(this),
    0x08: function HALT() {
      this.#programCounter = 0;
    }.bind(this),
  };
  storeInMemory(address, number) {
    this.#ram[address] = number;
  }
  getFromMemory(address) {
    return this.#ram[address];
  }
  viewRam() {
    return this.#ram;
  }
  loadProgram(program) {
    for (let i = 0; i < program.length; i++) {
      this.#ram[i] = program[i];
    }
  }
  executeProgram() {
    while (this.#programCounter >= 0) {
      const opcode = this.#ram[this.#programCounter];
      this.#programCounter++;
      const operand = this.#ram[this.#programCounter];
      this.#programCounter++;
      const registerAddress = this.#ram[this.#programCounter];
      this.#instructionSet[opcode](operand, registerAddress);
      if (opcode === 0x07 || opcode === 0x08) {
        break;
      }
      this.#programCounter++;
    }
  }
}
function add(number1, number2) {
  const virtualMachine = new VirtualMachine();
  const addProgram = [
    0x01, 0x00, 0x20, 0x01, 0x01, 0x21, 0x03, 0x00, 0x01, 0x02, 0x00, 0x22,
    0x08,
  ];
  virtualMachine.loadProgram(addProgram);
  virtualMachine.storeInMemory(0x20, number1);
  virtualMachine.storeInMemory(0x21, number2);
  virtualMachine.executeProgram();
  return virtualMachine.getFromMemory(0x22);
}
