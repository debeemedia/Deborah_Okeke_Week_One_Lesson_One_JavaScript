// Explore undefined and null

// NB: The task requires us to declare a variable without initializing it, and a variable cannot be declared with "const" and not be initialized, so I used "let" and ignored the lint check

let uche
console.log(uche)
console.log(typeof uche)

uche = null
console.log(uche)
console.log(typeof uche)
