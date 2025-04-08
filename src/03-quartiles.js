'use strict'

const fs = require('fs')

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
 * Complete the 'quartiles' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quartiles(arr) {
  const sorted = [...arr].sort((a, b) => a - b)
  const len = sorted.length
  const mid = Math.floor(len / 2)
  const lowerHalf = sorted.slice(0, mid)
  const upperHalf = sorted.slice(len % 2 ? mid + 1 : mid)

  const Q1 = calcMedian(lowerHalf)
  const Q2 = calcMedian(sorted)
  const Q3 = calcMedian(upperHalf)

  return [Q1, Q2, Q3]
}

function calcMedian(sortedArr) {
  const len = sortedArr.length
  const mid = Math.floor(len / 2)
  let median = null

  if (len % 2 === 0) {
    median = (sortedArr[mid - 1] + sortedArr[mid]) / 2
  } else {
    median = sortedArr[mid]
  }

  return median
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

  const n = parseInt(readLine().trim(), 10)

  const data = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(dataTemp => parseInt(dataTemp, 10))
  const res = quartiles(data)

  ws.write(res.join('\n') + '\n')

  ws.end()
}
