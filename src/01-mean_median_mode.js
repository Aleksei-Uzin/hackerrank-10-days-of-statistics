function processData(input) {
  const [_, str] = input.trim().split('\n')
  const arr = str.split(' ').map(Number)

  const calcMean = arr => {
    const sum = arr.reduce((acc, n) => acc + n, 0)
    const mean = sum / arr.length
    return mean.toFixed(1)
  }

  const calcMedian = arr => {
    const sorted = [...arr].sort((a, b) => a - b)
    const len = arr.length
    const mid = Math.floor(len / 2)
    let median = null

    if (len % 2 === 0) {
      median = (sorted[mid - 1] + sorted[mid]) / 2
    } else {
      median = sorted[mid]
    }

    return median.toFixed(1)
  }

  const calcMode = arr => {
    const amount = {}
    let max = 0
    let mode = Infinity

    for (let val of arr) {
      if (Object.hasOwn(amount, val)) amount[val] += 1
      else amount[val] = 1

      if (amount[val] > max || (amount[val] === max && val < mode)) {
        max = amount[val]
        mode = val
      }
    }

    return mode
  }

  const mean = calcMean(arr)
  const median = calcMedian(arr)
  const mode = calcMode(arr)

  console.log(mean)
  console.log(median)
  console.log(mode)
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
  _input += input
})

process.stdin.on('end', function () {
  processData(_input)
})
