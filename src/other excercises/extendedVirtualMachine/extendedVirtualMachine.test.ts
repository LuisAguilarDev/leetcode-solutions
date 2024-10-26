import { ExtendedVirtualMachine } from './extendedVirtualMachine';

describe('Extended Virtual Machine', () => {
  test('#1 The program loaded into the virtual machine should sum both values', () => {
    //  Fun F1(a, b)
    // 	return a + b + 10

    // Fun F2(a, b)
    // 	return a + b + 20

    // X = 10
    // Y = 20
    // W = F1(X,Y)
    // Z = F2(W,W)

    // Nota: Tienes que pasar los parámetros de las funciones en el stack
    const virtualMachine = new ExtendedVirtualMachine();

    // prettier-ignore
    const baseProgram = [
      0x0e, 0x00, 0x09,//call F1
      0x0e, 0x00, 0x1E,//call F2
      0x08, 0x00, 0x00
  ];
    // prettier-ignore
    const F1Program = [
      0x01, 0x00, 0x34,//load 09
      0x01, 0x01, 0x37,//load 12
      0x01, 0x02, 0x34,//load 15
      0x04, 0x00, 0x01,//add 18
      0x04, 0x00, 0x02,//add 21
      0x02, 0x00, 0x55,//store 24
      0x0f, 0x00, 0x00 //return 27
    ]

    // prettier-ignore
    const F2Program = [
      0x01, 0x00, 0x55,//load 30
      0x01, 0x01, 0x55,//load 33
      0x01, 0x02, 0x37,//load 36
      0x04, 0x00, 0x01,//add 39
      0x04, 0x00, 0x02,//add 41
      0x02, 0x00, 0x55,//push 44
      0x0f, 0x00, 0x00 //return 47
    ]
    // prettier-ignore
    // 52-0x34 - 55-0x37 //
    const variables = [
        0x10, 0x0A, 0x00,//storing 10 // part of the progmam
        0x10, 0x14, 0x00//storing 20 // part of the progmam
      ]
    virtualMachine.loadProgram([
      ...baseProgram,
      ...F1Program,
      ...F2Program,
      ...variables,
    ]);

    expect(virtualMachine.getFromMemory(0x34)).toBe(10);
    expect(virtualMachine.getFromMemory(0x37)).toBe(20);
    virtualMachine.executeProgram();
    expect(virtualMachine.getFromMemory(0x55)).toBe(100);
  });
});
