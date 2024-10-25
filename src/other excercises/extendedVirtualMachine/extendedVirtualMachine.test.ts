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
    const F1Program = [
      0x10, 0x0A, 0x00,//storing 10
      0x0d, 0x00, 0x00,//pop
      0x0d, 0x01, 0x00,//pop
      0x01, 0x02, 0x02,//load
      0x04, 0x00, 0x01,//add
      0x04, 0x00, 0x02,//add
      0x0c, 0x00, 0x00,//push
      0x08,
    ]
    // prettier-ignore
    const F2Program = [
      0x10, 0x14, 0x00,//storing 20
      0x0d, 0x00, 0x00,//pop
      0x0d, 0x01, 0x00,//pop
      0x01, 0x02, 0x02,//load
      0x04, 0x00, 0x01,//add
      0x04, 0x00, 0x02,//add
      0x0c, 0x00, 0x00,//push
      0x08,
    ]
    // prettier-ignore
    const addProgram = [
      0x01, 0x00, 0x30,//load
      0x01, 0x01, 0x31,//load
      0x0c, 0x00, 0x00,//push
      0x0c, 0x01, 0x00,//push
      0x0e, 0x00, 0x00,//call F1
      0x0d, 0x00, 0x00,//pop
      0x0c, 0x00, 0x00,//push
      0x0c, 0x00, 0x00,//push
      0x0e, 0x00, 0x15,//call F2
      0x0d, 0x00, 0x00,//pop
      0x02, 0x00, 0x32,//store
      0x08,
  ];
    virtualMachine.loadProgram([...F1Program, ...F2Program, ...addProgram]);
    virtualMachine.storeInMemory(10, 0x30);
    virtualMachine.storeInMemory(20, 0x31);
    //falta probar
    console.log('result', virtualMachine.getFromMemory(0x32));
  });
});
