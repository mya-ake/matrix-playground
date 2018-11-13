import { parser as m, print } from './core/matrix'

const sum = (...matrices) => {
  return matrices.reduce((result, matrix) => {
    return matrix.map((row, i) => {
      return row.map((entry, j) => {
        return result[i][j] + entry
      })
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

const C = sum(A, B)

print(C)
