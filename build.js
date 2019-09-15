function isPrime(n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    for (let i=2; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function collatz(n) {
    let seq = {n: true};
    while (n != 1) {
        if (n % 2 == 0) {
            n /= 2
            seq[n] = true;
        } else {
            n = 3 * n + 1
            seq[n] = true;
        }
    }
    seq[n] = true;
    return seq;
}

/*
let best = 0;
let value = 0;
for (let i = 1; i < 1025; i++) {
    if (Object.keys(collatz(i)).length > best) {
        best = Object.keys(collatz(i)).length;
        value = i;
    }
}
console.log("best", best, " value:", value); */

let coll = collatz(871);

for (let r=0; r < 32; r++) {
    for (let c=0; c < 32; c++) {

        let n = 32 * r + c + 1;
        let classLst = [];

        let evenOdd = ((n % 2) == 0) ? "even" : "odd";
        classLst.push(evenOdd);

        if ( isPrime(n) )
            classLst.push("prime");

        if ( n in coll )
            classLst.push("collatz")

        let classNames = classLst.join(" ");

        let text = `<rect x='${10 * c}' y='${10 * r}' width='10px' height='10px' class='${classNames}'/>`;
        console.log(text);
    }
}
