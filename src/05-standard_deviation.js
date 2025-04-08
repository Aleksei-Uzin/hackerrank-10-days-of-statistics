'use strict'

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin
})

process.stdin.on('end', function () {
  inputString = inputString.split('\n')

  main()
})

function readLine() {
  return inputString[currentLine++]
}

/*
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
  const mean = calcMean(arr)
  const n = arr.length
  let sumSquared = 0

  for (let n of arr) {
    sumSquared += Math.pow(n - mean, 2)
  }

  const stdDevRes = Math.sqrt(sumSquared / n).toFixed(1)

  console.log(stdDevRes)
}

function calcMean(arr) {
  const sum = arr.reduce((acc, n) => acc + n, 0)
  const n = arr.length
  const mean = (sum / n).toFixed(1)
  return mean
}

function main() {
  const n = parseInt(readLine().trim(), 10)

  const vals = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(valsTemp => parseInt(valsTemp, 10))

  stdDev(vals)
}
