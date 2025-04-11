/**
 * Task
 * In a single toss of 2 fair (evenly-weighted) six-sided dice,
 * find the probability that their sum will be at most 9.
 *
 * Solution Approach:
 * 1. Determine the total number of possible outcomes when rolling two 6-sided dice.
 *    - Each die has 6 faces. Total outcomes = 6 * 6 = 36.
 * 2. Determine the number of outcomes where the sum is *greater* than 9 (the complement event).
 *    - Sum = 10: (4,6), (5,5), (6,4) -> 3 outcomes
 *    - Sum = 11: (5,6), (6,5) -> 2 outcomes
 *    - Sum = 12: (6,6) -> 1 outcome
 *    - Total outcomes with sum > 9 = 3 + 2 + 1 = 6.
 * 3. Determine the number of outcomes where the sum is *at most* 9 (<= 9).
 *    - Favorable outcomes = Total outcomes - Outcomes with sum > 9
 *    - Favorable outcomes = 36 - 6 = 30.
 * 4. Calculate the probability.
 *    - Probability = Favorable Outcomes / Total Outcomes
 *    - Probability = 30 / 36
 * 5. Simplify the fraction.
 *    - Probability = 5 / 6
 */

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

function solve(arr1, arr2, n) {
  const len1 = arr1.length
  const len2 = arr2.length
  const totalOutcomes = len1 * len2
  let unfavorableOutcomes = 0

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (arr1[i] + arr2[j] > n) {
        unfavorableOutcomes++
      }
    }
  }

  const favorableOutcomes = totalOutcomes - unfavorableOutcomes // 36 - 6 = 30
  const commonDivisor = gcd(favorableOutcomes, totalOutcomes)
  const numerator = favorableOutcomes / commonDivisor // 30 / 6 = 5
  const denominator = totalOutcomes / commonDivisor // 36 / 6 = 6

  // Output the result as a fraction string
  console.log(`${numerator}/${denominator}`) // Output: 5/6
}

const arr1 = [1, 2, 3, 4, 5, 6]
const arr2 = [1, 2, 3, 4, 5, 6]

solve(arr1, arr2, 9)
