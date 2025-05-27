function minEnd(n: number, x: number): number {
    // Convert inputs to BigInt for internal calculation.
    let bn = BigInt(n);
    const bx = BigInt(x);

    // Decrease bn by 1 since we need (n-1) increases from the first to the last element.
    bn = bn - 1n;

    // Initialize answer with bx (minimum bits required for AND operation)
    let ans: bigint = bx;
    console.log(ans.toString(2))
    // Check each bit position (0 to 30 for 32-bit integers)
    for (let i = 0; i < 31; i++) {
        // If the current bit in bx is 0, we have the flexibility to set this bit.
        console.log(i,ans.toString(2))
        console.log(bx , BigInt(i), 1n, 0n)
        console.log((bx >> BigInt(i)).toString(2), 1n, 0n)
        console.log(((bx >> BigInt(i)) & 1n) === 0n)
        if (((bx >> BigInt(i)) & 1n) === 0n) {
            // Use the lowest bit of the remaining increases (bn) to decide if we set this bit.
            ans |= (bn & 1n) << BigInt(i);
            // Right shift bn to process the next bit.
            bn >>= 1n;
            console.log("bn:",bn.toString(2))
        }
    }

    // Handle any remaining increases in the 31st bit.
    ans |= bn << 31n;

    // Convert the BigInt result back to a number.
    return Number(ans);
}


// console.log(minEnd(3, 4))
// console.log(minEnd(2, 7))
// console.log(minEnd(3, 1))
console.log(minEnd(6715154, 7193485))