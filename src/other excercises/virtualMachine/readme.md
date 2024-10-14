Instruction Set (1-byte per part)
Each instruction will be 3 bytes long:
Opcode (1 byte): Specifies the operation.
Register (1 byte): Specifies which register is involved.
Operand (1 byte): Specifies either a memory address or an immediate value.

Opcodes
Opcode Instruction Description
0x01 LOAD Load value from memory into register.
0x02 STORE Store value from register into memory.
0x03 ADD Add value from one register to another.
0x04 SUB Subtract value from one register.
0x05 INC Increment register by 1.
0x06 JMP Jump to an address in memory.
0x07 JZ Jump if R0 is zero.
0x08 HALT Stop the program.

Example Program 1: Adding Two Numbers
Let’s assume:
Program memory starts at address 0x00 and occupies the first few addresses.
Data memory starts at a higher address, say from 0x20 onwards, to store variables and results.
Updated Example: Adding Two Numbers
Memory layout:
Program memory: 0x00–0x0C
Data memory: 0x20 onwards (for data storage)
Data:
0x20: First number (4)
0x21: Second number (6)
0x22: Result location
Updated Instructions
Address Instruction Description
0x00 0x01 0x00 0x20 ;LOAD R0, 0x20 (Load value from memory 0x20)
0x03 0x01 0x01 0x21 ;LOAD R1, 0x21 (Load value from memory 0x21)
0x06 0x03 0x00 0x01 ;ADD R0, R1 (Add value in R1 to R0)
0x09 0x02 0x00 0x22 ;STORE R0, 0x22 (Store result in memory 0x22)
0x0C 0x08 ;HALT (Stop the program)
Program Flow:
LOAD R0, 0x20: Loads 4 from memory address 0x20 into R0.
LOAD R1, 0x21: Loads 6 from memory address 0x21 into R1.
ADD R0, R1: Adds R1 to R0 (4 + 6 = 10).
STORE R0, 0x22: Stores the result (10) in memory address 0x22.
HALT: Ends the program.
Updated Memory Layout
Address Value
0x00 0x01
0x01 0x00
0x02 0x20
0x03 0x01
0x04 0x01
0x05 0x21
0x06 0x03
0x07 0x00
0x08 0x01
0x09 0x02
0x0A 0x00
0x0B 0x22
0x0C 0x08
Data memory (starting from 0x20):

Address Value
0x20 0x04
0x21 0x06
0x22 ??
Key Changes
Program memory and data memory are separated. The program occupies memory from 0x00 to 0x0C, while data (variables) occupy memory from 0x20 and above.
This prevents any overlap between the code and data memory, ensuring they don't interfere with each other.

Updated Example Program 2: Count Down from 3 to 0
Memory Layout:

Program memory: 0x00–0x0E
Data memory: Starts at 0x20 for storing the countdown value.
Data:

0x20: Initial countdown value (3)
0x21: Location to store each countdown result
Updated Instructions
Address Instruction Description
0x00 0x01 0x00 0x20 LOAD R0, 0x20 (Load initial value 3 into R0)
0x03 0x04 0x00 SUB R0, 1 (Decrement R0 by 1)
0x05 0x07 0x00 0x0E JZ 0x0E (Jump to HALT if R0 == 0)
0x08 0x02 0x00 0x21 STORE R0, 0x21 (Store the countdown value)
0x0B 0x06 0x00 0x03 JMP 0x03 (Jump back to continue countdown)
0x0E 0x08 HALT (Stop the program)

Updated Example Program 3: Simple Jump Based on Condition
Memory Layout:

Program memory: 0x00–0x0D
Data memory: Starts at 0x20 to store the initial value and the result of the condition.
Data:

0x20: Initial value (5)
0x21: Location to store the result after the condition check (1 if non-zero, otherwise 0)
Updated Instructions
Address Instruction Description
0x00 0x01 0x00 0x20 LOAD R0, 0x20 (Load the value from memory)
0x03 0x07 0x00 0x0D JZ R0, 0x0D (Jump to HALT if R0 == 0)
0x06 0x01 0x01 0x01 LOAD R1, 0x01 (Load 1 into R1)
0x09 0x02 0x01 0x21 STORE R1, 0x21 (Store 1 if R0 was non-zero)
0x0C 0x08 HALT
0x0D 0x02 0x00 0x21 STORE R0, 0x21 (Store 0 if R0 was zero)
0x10 0x08 HALT
Program Flow:
LOAD R0, 0x20: Loads the initial value (5) from memory into R0.
JZ R0, 0x0D: If R0 == 0, jump to address 0x0D (store 0 and halt).
LOAD R1, 0x01: Loads the value 1 into R1 (to indicate that R0 was non-zero).
STORE R1, 0x21: Stores the value 1 at address 0x21 (result location).
HALT: Stops the program.
If the jump was taken (because R0 == 0), the program stores 0 in 0x21 and halts.
