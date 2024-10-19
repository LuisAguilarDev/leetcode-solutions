import { VirtualMachine } from "./virtualMachine";

 describe('Virtual Machine', () => {
    test('#1 The program loaded into the virtual machine should sum both values', () => {
        const virtualMachine = new VirtualMachine();
        const addProgram = [
            0x01, 0x00, 0x20,
            0x01, 0x01, 0x21,
            0x03, 0x00, 0x01,
            0x02, 0x00, 0x22,
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
    test('#2 The program loaded into the virtual machine should have count down from 3 to 0 and stored 1', () => {
        const virtualMachine = new VirtualMachine();
        const addProgram = [
            0x01, 0x00, 0x20,//load
            0x04, 0x00, 0x01,//sub
            0x07, 0x00, 0xF,//jump to halt adress
            0x02, 0x00, 0x21,//store
            0x06, 0x03, 0x00,//start over
            0x08,
        ];
        virtualMachine.loadProgram(addProgram);
        virtualMachine.storeInMemory(0x20, 3);
        virtualMachine.executeProgram();

        expect(virtualMachine.getFromMemory(0x21)).toEqual(1);
    });
    test('#3 The program loaded into the virtual machine should have count down from 3 to 0 and stored 1', () => {
        const virtualMachine = new VirtualMachine();
        const addProgram = [
            0x01, 0x00, 0x20,//load
            0x04, 0x00, 0x01,//sub
            0x02, 0x00, 0x21,//store
            0x07, 0x00, 0xF,//jump to halt adress
            0x06, 0x03, 0x00,//start over
            0x08,
        ];
        virtualMachine.loadProgram(addProgram);
        virtualMachine.storeInMemory(0x20, 3);
        virtualMachine.executeProgram();

        expect(virtualMachine.getFromMemory(0x21)).toEqual(0);
    });
    test(`#4 The program loaded into the virtual machine should Simple Jump Based on Condition
        if 0 store 0 if not 0 store 1`, () => {
        const virtualMachine = new VirtualMachine();
        const addProgram = [
            0x01, 0x00, 0x20,
            0x07, 0x00, 0x0D,
            0x01, 0x01, 0x00,//??puedo usar un valor conocido del programa?? o deberia cargarlo en memoria??
            0x02, 0x01, 0x21,
            0x08,
            0x02, 0x00, 0x21,
            0x08
        ];
        virtualMachine.loadProgram(addProgram);
        virtualMachine.storeInMemory(0x20, 5);
        virtualMachine.executeProgram();

        expect(virtualMachine.getFromMemory(0x21)).toEqual(1);
    });
    test(`#5 The program loaded into the virtual machine should Simple Jump Based on Condition
        if 0 store 0 if not 0 store 1`, () => {
        const virtualMachine = new VirtualMachine();
        const addProgram = [
            0x01, 0x00, 0x20,
            0x07, 0x00, 0x0D,
            0x01, 0x01, 0x0E,
            0x02, 0x01, 0x21,
            0x08,
            0x02, 0x00, 0x21,
            0x08, 0x01
        ];
        virtualMachine.loadProgram(addProgram);
        virtualMachine.storeInMemory(0x20, 0);
        virtualMachine.executeProgram();

        expect(virtualMachine.getFromMemory(0x21)).toEqual(0);
    });
  });
  