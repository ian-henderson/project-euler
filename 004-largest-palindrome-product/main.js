"use strict"
/*
Largest palindrome product

Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

let largestProduct = 0

for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
        if (i === j) continue
        const product = i * j
        if (!isPalindrome(product)) continue
        if (product > largestProduct) largestProduct = product
    }
}

console.log(largestProduct)

function isPalindrome(value) {
    const s = String(value)
    const firstHalf = s.slice(0, s.length / 2),
        secondHalf =
            s.length % 2 === 0
                ? s.slice(s.length / 2)
                : s.slice(s.length / 2 + 1)
    return firstHalf === secondHalf.split("").reverse().join("")
}
