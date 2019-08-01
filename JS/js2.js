// HAM FILTER
// const numbers = [1, 3, 5, 7]
// //Tao ra 1 mang moi chua gia tri lon hon 1
// const newNumbers = numbers.filter(function(number) {
//     if(number <= 1) return false
//     return true
// })
// console.log(newNumbers);

// eg:

// const animals = [
//     {name: 'Cat', age: 10},
//     {name: 'Mouse', age: 15},
//     {name: 'Dog', age: 20}
// ]
// const newAnimals = animals.filter(function(animal) {
//     if(animals.age <= 10) return false
//         return true
// })

//HAM REDUCE

// const numbers = [1, 3, 5, 7, 9]
// const tong = numbers.reduce(function(a, b) {
//     return a + b
// }, 1)
// console.log(tong);

// eg:

const animals = [
    {name: 'Cat', age: 10},
    {name: 'Mouse', age: 15},
    {name: 'Dog', age: 20}
]

const arrAge = animals.map(function(animal) {
    return animal.age
})
const sumAge = arrAge.reduce(function(a, b) {
    return a + b
})
console.log(sumAge);