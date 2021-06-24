"use strict"
/*
Largest palindrome product

Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

let largestProduct = 0,
    a = 999

while (a >= 100) {
    let b = a % 11 === 0 ? 999 : 990
    const db = a % 11 === 0 ? 1 : 11

    while (b >= a) {
        const product = a * b
        if (product <= largestProduct) break
        if (isPalindrome(product)) largestProduct = product
        b -= db
    }

    a -= 1
}

console.log(largestProduct)

function isPalindrome(n) {
    return n === +String(n).split("").reverse().join("")
}
