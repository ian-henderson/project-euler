"use strict"
/*
Smallest multiple

Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

let value

while (!isDivisible(value)) {
    if (value) value++
    else value = 1
}

console.log(value)

function isDivisible(value) {
    for (let i = 1; i <= 20; i++) {
        if (value % i !== 0) return false
    }
    return true
}
