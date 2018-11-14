import { parser as m, transpose, print } from './core/matrix'


const product = (...matrices) => {
  const calcRow = (baseRow, matrix) => {
    return matrix.map((row) => {
      return baseRow.reduce((result, baseEntry, i) => {
        return result + baseEntry * row[i]
      }, 0)
    })
  }

  return matrices.reduce((result, matrix) => {
    const transposedMatrix = transpose(matrix)
    return result.map((row) => {
      return calcRow(row, transposedMatrix)
    })
  })
}

const A = m`[
  1 2 3
  2 3 4
  3 4 5
]`

const B = m`[
  4 5 6
  5 6 7
  6 7 8
]`

const C = product(A, B)

print(C)
