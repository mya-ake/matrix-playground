export const parser = (matrixString) => {
  return matrixString[0]
    .replace(/^\[|\]$/g, '')
    .split(/\n/)
    .filter(row => row.length > 0)
    .map(row => row.trim())
    .map(row => row.split(/\s/))
    .map(row => row.map(v => Number(v)))
}

export const print = (matrix) => {
  const str = matrix
    .map(row => row.join(' '))
    .join('; ')
  console.log(`[${str}]`)
}
