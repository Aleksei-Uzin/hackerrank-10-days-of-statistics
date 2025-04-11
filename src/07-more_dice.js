/**
 * Task
 * In a single toss of 2 fair (evenly-weighted) six-sided dice,
 * find the probability that the values rolled by each die will be different
 * and the two dice have a sum of 6.
 *
 * Solution Approach:
 * 1. Determine the total number of possible outcomes when rolling two 6-sided dice.
 *    - Each die has 6 faces. Total outcomes = 6 * 6 = 36.
 *    - The sample space S consists of pairs (d1, d2) where d1, d2 are in {1, 2, 3, 4, 5, 6}.
 *    - |S| = 36.
 *
 * 2. Determine the number of outcomes that satisfy *both* conditions:
 *    - Condition A: The values rolled are different (d1 != d2).
 *    - Condition B: The sum of the values is 6 (d1 + d2 = 6).
 *
 * 3. List the pairs (d1, d2) where the sum is 6:
 *    - (1, 5)
 *    - (2, 4)
 *    - (3, 3)
 *    - (4, 2)
 *    - (5, 1)
 *
 * 4. Filter this list based on Condition A (values must be different):
 *    - (1, 5) -> 1 != 5 (Keep)
 *    - (2, 4) -> 2 != 4 (Keep)
 *    - (3, 3) -> 3 == 3 (Discard)
 *    - (4, 2) -> 4 != 2 (Keep)
 *    - (5, 1) -> 5 != 1 (Keep)
 *
 * 5. The favorable outcomes are: (1, 5), (2, 4), (4, 2), (5, 1).
 *    - Number of favorable outcomes = 4.
 *
 * 6. Calculate the probability.
 *    - Probability = Favorable Outcomes / Total Outcomes
 *    - Probability = 4 / 36
 *
 * 7. Simplify the fraction.
 *    - Find the greatest common divisor (GCD) of 4 and 36, which is 4.
 *    - Probability = (4 / 4) / (36 / 4) = 1 / 9
 */

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

function solve() {
  const dieFaces = [1, 2, 3, 4, 5, 6]
  const n = dieFaces.length
  const totalOutcomes = n * n // 6 * 6 = 36
  let favorableOutcomes = 0

  // Iterate through all possible outcomes of rolling two dice
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const roll1 = dieFaces[i]
      const roll2 = dieFaces[j]

      // Check if the outcome satisfies both conditions:
      // 1. The values are different (roll1 !== roll2)
      // 2. The sum is 6 (roll1 + roll2 === 6)
      if (roll1 !== roll2 && roll1 + roll2 === 6) {
        favorableOutcomes++
      }
    }
  }

  const commonDivisor = gcd(favorableOutcomes, totalOutcomes)
  const numerator = favorableOutcomes / commonDivisor // 4 / 4 = 1
  const denominator = totalOutcomes / commonDivisor // 36 / 4 = 9

  // Output the result as a fraction string
  console.log(`${numerator}/${denominator}`) // Output: 1/9
}

solve()
