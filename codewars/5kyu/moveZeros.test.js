import { test, expect } from 'vitest'
import { moveZeros } from './moveZeros.js'

test('some exampples', () => {
  expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([
    1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
  ])
  expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toStrictEqual([
    false,
    1,
    1,
    2,
    1,
    3,
    'a',
    0,
    0,
  ])
  moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']) // returns[false,1,1,2,1,3,"a",0,0]
})