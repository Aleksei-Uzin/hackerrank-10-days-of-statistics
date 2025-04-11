/**
 * Task
 * There are 3 urns labeled X, Y, and Z.
 *  - Urn X contains 4 red balls and 3 black balls. (Total: 7)
 *  - Urn Y contains 5 red balls and 4 black balls. (Total: 9)
 *  - Urn Z contains 4 red balls and 4 black balls. (Total: 8)
 *
 * One ball is drawn from each of the 3 urns.
 * What is the probability that, of the 3 balls drawn, 2 are red and 1 is black?
 *
 * Solution Approach:
 * 1. Define the contents of each urn and calculate the total number of balls in each.
 *    - Urn X: 4R, 3B, Total = 7
 *    - Urn Y: 5R, 4B, Total = 9
 *    - Urn Z: 4R, 4B, Total = 8
 *
 * 2. Calculate the probability of drawing a red (R) or black (B) ball from each urn.
 *    - P(Rx) = 4/7, P(Bx) = 3/7
 *    - P(Ry) = 5/9, P(By) = 4/9
 *    - P(Rz) = 4/8 = 1/2, P(Bz) = 4/8 = 1/2
 *
 * 3. Identify the possible combinations of draws that result in exactly 2 red balls and 1 black ball.
 *    Since one ball is drawn from each urn, the possible scenarios are:
 *    - Case 1: Red from X, Red from Y, Black from Z (RRB)
 *    - Case 2: Red from X, Black from Y, Red from Z (RBR)
 *    - Case 3: Black from X, Red from Y, Red from Z (BRR)
 *
 * 4. Calculate the probability of each case. Since the draws from each urn are independent events,
 *    we multiply the probabilities for each sequence.
 *    - P Case 1 = P(Rx) * P(Ry) * P(Bz)
 *    - P Case 2 = P(Rx) * P(By) * P(Rz)
 *    - P Case 3 = P(Bx) * P(Ry) * P(Rz)
 *
 * 5. Add the probabilities of these mutually exclusive cases to get the total probability
 *    of drawing exactly 2 red and 1 black ball.
 *    - P Total = P Case 1 + P Case 2 + P Case 3
 *
 */

class Urn {
  constructor(red, black) {
    this.red = red
    this.black = black
    this.total = red + black
  }

  get pRed() {
    return this.red / this.total
  }

  get pBlack() {
    return this.black / this.total
  }
}

const urnX = new Urn(4, 3)
const urnY = new Urn(5, 4)
const urnZ = new Urn(4, 4)

// Calculate probability of each case (2 Red, 1 Black)
// Case 1: RRB (Red X, Red Y, Black Z)
const case1 = urnX.pRed * urnY.pRed * urnZ.pBlack

// Case 2: RBR (Red X, Black Y, Red Z)
const case2 = urnX.pRed * urnY.pBlack * urnZ.pRed

// Case 3: BRR (Black X, Red Y, Red Z)
const case3 = urnX.pBlack * urnY.pRed * urnZ.pRed

// Total probability
const totalProbability = (case1 + case2 + case3).toFixed(4)

// probability: 0.4048 or 40.48% or 17/42
console.log(totalProbability)
