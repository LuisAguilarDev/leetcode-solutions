1. Implementar este conjunto de instrucciones.

2. Escribir un programma en este ‘lenguaje’ que hace estas operaciones :

Fun F1(a, b)
return a + b + 10

Fun F2(a, b)
return a + b + 20

X = 10
Y = 20
W = F1(X,Y)
Z = F2(W,W)

Nota: Tienes que pasar los parámetros de las funciones en el stack

MEMORY
You have 256 bytes of memory
You can put the stack (SP) at the top of the memory and grow it backwards
REGISTERS
IP - Instruction Pointer (holds the address of the next instruction)
SP - Stack Pointer (points to the top of the stack)
BP - Base Pointer (used for stack frame management in function calls). [ optional
for now ]
A - General-purpose register for arithmetic operations
B - General-purpose register for arithmetic operations
C - General-purpose register for arithmetic operations
D - General-purpose register for arithmetic operations
FLAGS - Status flags for comparisons and jumps
Register Encoding
RegisterEncoding
A 0x00
B 0x01
C 0x02
D 0x03
Instruction Set Table
Opcode Instruction Description Operand 1 Operand 2
0x01 LOAD

Load value from memory
address into register

Register (A, B,
C, D)

Address (1 byte)

0x02 STORE

Store value from register
into memory address

Register (A, B,
C, D)

Address (1 byte)

0x03 MOV

Copy value from one
register to another

Source Register
(A, B, C, D)

Destination
Register (A, B, C,
D)

0x04 ADD

Add two registers and
store result in the first

Register (A, B,
C, D)

Register (A, B, C,
D)

0x05 SUB

Subtract second register
from first and store result

Register (A, B,
C, D)

Register (A, B, C,
D)

0x06 MUL

Multiply two registers and
store result in the first

Register (A, B,
C, D)

Register (A, B, C,
D)

0x07 DIV

Divide first register by
second and store quotient
in the first register; store
remainder in register D

Register (A, B,
C, D)

Register (A, B, C,
D)

0x08 CMP Compare two registers

Register (A, B,
C, D)

Register (A, B, C,
D)

0x09 JMP Jump to memory address Not used (0x00) Address (1 byte)
0x0A JE Jump if equal Not used (0x00) Address (1 byte)
0x0B JNE Jump if not equal Not used (0x00) Address (1 byte)
0x0C PUSH Push register onto stack

Register (A, B,
C, D)

Not used (0x00)

0x0D POP

Pop value from stack into
register

Register (A, B,
C, D)

Not used (0x00)

0x0E CALL

Call function at memory
address

Not used (0x00) Address (1 byte)
0x0F RET Return from function Not used (0x00) Not used (0x00)
0x10 NOP No operation Not used (0x00) Not used (0x00)
0x11 HLT Halt execution Not used (0x00) Not used (0x00)

Notes
• Operand 1 and Operand 2 indicate what type of data each operand represents
(register or address).
• Instructions like JMP, JE, and JNE do not use operands, so you can fill those
with 0x00.
• The maximum addressable memory is limited to 256 addresses (using an 8-bit
address).

The FLAGS register is used to store status flags, which are set by certain
operations (like comparisons or arithmetic) and are checked by conditional
instructions (JE, JNE, etc.). Here's a typical breakdown of the flags you'd need for
a simplified processor:
FLAGS Register Structure:
Bit Name Purpose
0 ZF (Zero) Set to 1 if the result of an operation is zero
1 SF (Sign) Set to 1 if the result is negative (for signed numbers)
2 CF (Carry)

Set to 1 if an unsigned arithmetic operation
generates a carry/borrow

3
OF
(Overflow)

Set to 1 if a signed arithmetic operation results in
overflow
How the Flags Are Used:
1 Zero Flag (ZF):
◦ Set by comparison or arithmetic operations when the result is zero.

◦ Used by JE (jump if equal) to determine if two values are equal.
2 Sign Flag (SF):
◦ Set if the result of an operation is negative, indicating the sign of the result

in signed arithmetic.

◦ Useful for checking conditions in signed comparisons.
3 Carry Flag (CF):
◦ Set when an unsigned arithmetic operation (like addition) produces a carry

or when subtraction results in a borrow.

◦ Helps with multi-word arithmetic and checking for overflow in unsigned

operations.
4 Overflow Flag (OF):
◦ Set when a signed arithmetic operation results in an overflow (e.g., when
adding two large positive numbers results in a negative number due to
overflow).

◦ Used to detect signed overflow conditions.
Example Usage:
• CMP A, B: Subtracts B from A and sets the flags accordingly (without storing the
result):
◦ ZF = 1 if A == B
◦ SF = 1 if A < B (in signed context)
◦ CF = 1 if A < B (in unsigned context)
• JE [addr]: Jumps to addr if ZF is set, i.e., if the previous comparison found the
two values equal.
This simple FLAGS register is enough to handle conditional logic in C, such as if,
else, and loops (while, for).
