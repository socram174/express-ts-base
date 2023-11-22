import { expect, test } from 'vitest'
import { getUser } from '../src/helpers/hola'

test('adds 1 + 2 to equal 3', () => {
  expect(getUser()).toEqual({
    "age": 55,
    "name": "Juan",
  })
})