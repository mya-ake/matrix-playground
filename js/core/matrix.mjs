export const parser = (matrixString) => {
  return matrixString[0]
    .replace(/^\[|\]$/g, '')
    .split(/\n/)
    .filter(row => row.length > 0)
    .map(row => row.trim())
    .map(row => row.split(/\s/))
    .map(row => row.map(v => Number(v)))
}

export const transpose = (matrix) => {
  return matrix.map((row, i) => {
    return row.map((entry, j) => {
      return matrix[j][i]
    })
  })
}

export const print = (matrix) => {
  const str = matrix
    .map(row => row.join(' '))
    .join('; ')
  console.log(`[${str}]`)
}
