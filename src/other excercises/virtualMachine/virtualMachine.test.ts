import { VirtualMachine } from "./virtualMachine";

 describe('Virtual Machine', () => {
    test('#1 The program loaded into the virtual machine should sum both values', () => {
        const virtualMachine = new VirtualMachine();
        const addProgram = [
            0x01, 0x00, 0x20, 0x01, 0x01, 0x21, 0x03, 0x00, 0x01, 0x02, 0x00, 0x22,
            0x08,
        ];
        const number1 = 20;
        const number2 = 40;
        virtualMachine.loadProgram(addProgram);
        virtualMachine.storeInMemory(0x20, number1);
        virtualMachine.storeInMemory(0x21, number2);
        virtualMachine.executeProgram();

        expect(virtualMachine.getFromMemory(0x22)).toEqual(number1+number2);
    });
  });
  