/*
Given an array of positive or negative integers

I= [i1,..,in]

you have to produce a sorted array P of the form

[ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

Example:
I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
[2, 3, 5] is the list of all prime factors of the elements of I, hence the result.
*/

function primeFactors(n: number): number[]{
    let factors: number[] = [];
    let divisor = 2;
    while(n>=2){
        if(n%divisor === 0){
            factors.push(divisor);
            n = n / divisor;
        }
        else divisor++;
    }
    return factors;
}

function sumOfDivided(lst: number[]): number[][] {
    let primeSum: number[][] = [];
    let primeNumbers: number[] = [];
    for(const n of lst){
        primeNumbers = primeNumbers.concat(primeFactors(Math.abs(n)));
    }
    primeNumbers = primeNumbers.filter((value, index, self)=>{return self.indexOf(value) === index;})
    primeNumbers.sort((a, b) => a - b);
    for(const p of primeNumbers){
        let sum = 0;
        for(const n of lst)
        {
            if(n % p === 0) sum += n;
        }
        primeSum.push([p, sum]);
    }
    return primeSum;
}

console.log(sumOfDivided([12, 15]));
console.log(sumOfDivided([15, 21, 24, 30, 45]));
