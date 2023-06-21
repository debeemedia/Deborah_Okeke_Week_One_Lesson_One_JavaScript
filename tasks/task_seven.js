// Practice type checking and comparison

// typeof operator
console.log(typeof 1)
console.log(typeof '1')
console.log(typeof true)
console.log(typeof null)
console.log(typeof [])
console.log(typeof {})
console.log(typeof undefined)

const checkString = 'this is a string'
console.log(typeof checkString)

const checkNum = 67
console.log(typeof checkNum)

const abundantCash = true
console.log(typeof abundantCash)

// equality and strict equality

console.log(1 == '1')
// the above statement is true

console.log(1 === '1')
// the above statement is false

// understanding truthiness and falsiness
let check = true
if (check) {
  console.log('this is true')
} else {
  console.log('this is false')
}

check = !true
if (check) {
  console.log('this is true')
} else {
  console.log('this is false')
}
