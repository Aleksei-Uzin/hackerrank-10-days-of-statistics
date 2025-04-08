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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */

function interQuartile(values, freqs) {
  const sorted = getSortedExpandedArr(values, freqs)
  const len = sorted.length
  const mid = Math.floor(len / 2)
  const lowerHalf = []
  const upperHalf = []

  if (len % 2 === 1) {
    for (let i = 0; i < len; i++) {
      if (i < mid) lowerHalf.push(sorted[i])
      if (i > mid) upperHalf.push(sorted[i])
    }
  } else {
    for (let i = 0; i < len; i++) {
      if (i < mid) lowerHalf.push(sorted[i])
      if (i >= mid) upperHalf.push(sorted[i])
    }
  }

  const Q1 = calcMedian(lowerHalf)
  const Q3 = calcMedian(upperHalf)
  const interquartileRange = (Q3 - Q1).toFixed(1)

  console.log(interquartileRange)
}

function getSortedExpandedArr(values, freqs) {
  values = values.map((val, i) => [val, freqs[i]])
  const sortedArr = values.sort(([a], [b]) => a - b)
  const expandedArr = []

  for (let [val, freq] of sortedArr) {
    while (freq > 0) {
      expandedArr.push(val)
      freq -= 1
    }
  }

  return expandedArr
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
  const n = parseInt(readLine().trim(), 10)

  const val = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(valTemp => parseInt(valTemp, 10))

  const freq = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map(freqTemp => parseInt(freqTemp, 10))

  interQuartile(val, freq)
}
