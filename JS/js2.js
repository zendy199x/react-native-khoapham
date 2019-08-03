// Hàm filter
// const numbers = [1,3,5,7,9]
// //  Tạo ra 1 mảng mới chứa giá 
// //  trị lớn hơn 1
// const newNumbers = numbers.filter(function(number){
//     if(number <= 1) return false
//     return true
// })
// console.log(newNumbers)
// const animals = [
//     {name : "Mèo" , age : 10},
//     {name : "Chó" , age : 15},
//     {name : "Thỏ" , age : 20},
// ]
// const newAnimals = animals.filter(function(animal){
//     if(animal.age <= 10) return false
//     return true
// })
// console.log(newAnimals)
// const numbers = [2,3,5,7,9]
// const tong = numbers.reduce(function(a , b ){
//         console.log("A " + a);
//         console.log("B " + b);
//         return a + b
// })
// console.log(tong)
// const animals = [
//     {name : "Mèo" , age : 10},
//     {name : "Chó" , age : 15},
//     {name : "Thỏ" , age : 20},
// ]
// const arrayAge = animals.map(function(animal){
//     return animal.age
// })
// const sumage = arrayAge.reduce(function(a,b){
//     return a + b
// })
// console.log(sumage)

// Array.prototype.mymap = function(fn){
//     let newArray = []
//     for(let i = 0 ; i < this.length ; i++){
//         const value = fn(this[i])
//         newArray.push(value)
//     }
//     return newArray
// }
// Array.prototype.myfilter = function(fn){
//     let newArray = []
//     for(let i = 0 ; i < this.length ; i++){
//         const value = fn(this[i])
//         if(value == true) newArray.push(this[i])
//     }
//     return newArray
// }
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// console.log(numbers.myfilter(function(number){
//     if(number > 5) return true
//     return false
// }))
//1 : Object
// const person1 = {name : "Nguyen Van A" , age : 20}
// 2 : functional
function Person(Name , Age){
    this.name = name
    this.age = age
    this.infor = function() {
        return `Teo : ${this.name}, Tuoi : ${this.age}`
    }
}
const teo = new Person('Teo', 10);
console.log = teo.infor;
console.log(tuoi.bind({name : 'Ti', age : 20})());