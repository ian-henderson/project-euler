"use strict"
/*
Smallest multiple

Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function factorial(value) {
    let result = 1
    for (let i = 1; i <= value; i++) result *= i
    return result
}
