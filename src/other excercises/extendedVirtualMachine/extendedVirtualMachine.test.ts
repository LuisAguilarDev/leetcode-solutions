import { ExtendedVirtualMachine } from './extendedVirtualMachine';

describe('Extended Virtual Machine', () => {
  //El problema necesita ser revisado
  xtest('#1 The program loaded into the virtual machine should sum both values', () => {
    //  Fun F1(a, b)
    // 	return a + b + 10

    // Fun F2(a, b)
    // 	return a + b + 20

    // X = 10
    // Y = 20
    // W = F1(X,Y)
    // Z = F2(W,W)
    // Si la operacion es muy compleja probar las cosas pequeñas
    // Nota: Tienes que pasar los parámetros de las funciones en el stack
    const virtualMachine = new ExtendedVirtualMachine();

    //Functions result are stored in R0
    // prettier-ignore
    const baseProgram = [
      0x0e, 0x00, 0x09,//call F1 return address?
      0x0e, 0x00, 0x1E,//call F2
      0x11, 0x00, 0x00
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
    const variables = [
      0x0A,0x14 // storing 10 / 20
    ]
    virtualMachine.loadProgram([
      ...baseProgram,
      ...F1Program,
      ...F2Program,
      ...variables,
    ]);

    expect(virtualMachine.getFromMemory(0x33)).toBe(10);
    expect(virtualMachine.getFromMemory(0x34)).toBe(20);
    virtualMachine.executeProgram();
    expect(virtualMachine.getFromMemory(0x55)).toBe(100);
  });
});
