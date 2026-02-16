// const books = ["physics", "math", "sst"]

// const [a, b, c]  = books

// console.log(a, b, c)


// const student = {
//     name: "suraj",
//     age: 21
// }

// const {name, age} = student

// console.log(name, age)

// const {name: n, age: m} = student

// console.log(n, m)

// const {name: n} = student

// console.log(n)

// const student = {
//     name: "suraj",
    // age: 21,
    // city: "jalandhar"  
// }
// if the field is not mentioned then we can give the fiels=value and it will be added else if filed is mention you cannot write to update it 
// const {city = "kolkata"} = student
// console.log(city)

const student = {
    name: "suraj",
    age: 21,
    marks: {
        math: 60,
        science: 90
    }
}

const {marks} = student
console.log(marks)

const {marks:{math, science}} = student
console.log(math, "*******", science)