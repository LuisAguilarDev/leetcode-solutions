function minOperations(k: number): number {
    let best = k - 1
    let start = Math.floor(k**(1/2)-1)
    let end = (start + 1) * 2
    for(let i = start; i<=end;i++){
        let inc = i - 1
        let dup_ops = Math.ceil(k/i) - 1
        if((inc + dup_ops) < best){
        best = inc + dup_ops
        }
    }
    return best
};

// (1+x)*(1+x)
// (1+3)(1+3) = 16
// (1+4)(1+2) = 10
// ts ≈ td
// optimal solution happens r ≈ c so r ** 2 ≈ k then r = k ** 1/2
// const r = Math.floor(k ** (1/2)); // floor cause we want minimum
// const c = Math.floor((k + r - 1) / r); // used to ceil the first value
// console.log((k + r - 1) / r,11/r)
// return r + c - 2;
// console.log(minOperations(11))
// console.log(minOperations(0),0)//0
// console.log(minOperations(1),0)//0
// console.log(minOperations(2),1)//1
// console.log(minOperations(4),2)//2
// console.log(minOperations(9),4)//4
// console.log(minOperations(16),6)//6
console.log(minOperations(2000))//6

// ((1+3)(1+3))