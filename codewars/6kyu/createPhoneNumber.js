// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

export function createPhoneNumber(numbers) {
  return `(${numbers.shift()}${numbers.shift()}${numbers.shift()}) ${numbers.shift()}${numbers.shift()}${numbers.shift()}-${numbers.shift()}${numbers.shift()}${numbers.shift()}${numbers.shift()}`
}
