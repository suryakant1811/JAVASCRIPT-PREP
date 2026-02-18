// const name = ["a", "b", "c"]
// console.log(name)
// name.push("s")
// console.log(name)
// name.pop()
// console.log(name)
// name.shift()
// console.log(name)
// name.unshift("suryakant")
// console.log(name)

// ---------------------------------------------------------------------------------------------------------------------------------

//  1 -> spread operator (...anyNameOfArrayOrObject ) it gives all the value associate to it and you can add it or modify any how you want

// let cart = ["mota", "patla"]
// console.log(cart)
// cart = [...cart, "iphone"]
// cart = [...cart, "buy"]
// console.log(cart)

// function fun(...anyname){
//     anyname.forEach( (item) => console.log(item) )
// }

// const fun = (...xyz) => {
//     xyz.forEach( (item) => {console.log(item)} )
// }

// fun(1,2,3,4,5)

// ---------------------------------------------------------------------------------------------------------------------------------

// const products = [
//   { id: 1, name: "Mouse", price: 500 },
//   { id: 2, name: "Keyboard", price: 1000 },
//   { id: 3, name: "Monitor", price: 8000 },
// ];

// let cart = []

// function addProduct(id){
//     const newProduct = products.find( (item) => {return item.id === id} )
//     if (newProduct) {
//         const quantity = 2;
//         const discount = newProduct.price * 0.1;
//         const finalPrice = newProduct.price - discount
//         const totalPrice = quantity * finalPrice
//         const items = {
//             ...newProduct,
//             quantity,
//             discount,
//             finalPrice,
//             totalPrice
//         }

//         cart = [...cart, items]
//     }
//     else return "product not found"
// }

// const addQuantity = (id) => {
//     const product = cart.find( (item) => { return item.id === id})
//     if(product){
//         product.quantity = product.quantity+1;
//     }
//     else console.log("product not found")
// }

// addProduct(1)
// console.log("*************************************")
// addQuantity(2)
// console.log(cart)

// ---------------------------------------------------------------------------------------------------------------------------------

// const products = [
//   { id: 1, name: "A", price: 800, category: "Laptop" },
//   { id: 2, name: "B", price: 1500, category: "Laptop" },
//   { id: 3, name: "C", price: 2000, category: "Mobile" },
//   { id: 4, name: "D", price: 3000, category: "Laptop" },
// ];

// const product =  products.filter( (item) => item.category === "Laptop" && item.price > 1000 )

// console.log(product)

// ---------------------------------------------------------------------------------------------------------------------------------

// const inventory = [
//   { id: 1, name: "Pen", stock: 5 },
//   { id: 2, name: "Book", stock: 20 },
//   { id: 3, name: "Pencil", stock: 2 },
// ];

// const product = inventory.map((item) => {
//     let val = ""
//     if(item.stock >= 10 ) val = "In stock"
//     else val = "Out stock"
//     return item = {...item, status: val}
// })

// console.log(product)

// --------------------------------------------------------------------------------------------------------------------------------


// import { products } from "./dummy.js"    // if using default in 
// console.log(products)

// ---------------------------------------------------------------------------------------------------------------------------------

// const number = [10, 20, 30, 40, 50]
// const [n1, n2, ...n] = number
// console.log(n1, n2, n)

// parse --> object banata hai string ko
// stringfy --> string banata h obj se 

// ---------------------------------------------------------------------------------------------------------------------------------

// x = 10
// console.log(x)

// "use strict"
// // x = 10 // error
// let x  = 10
// console.log(x)

// function add (a, a) {
//     return a+a
// }

// console.log(add(1,2))

// "use strict"
// function add (a, a) {
//     return a+a
// }

// console.log(add(1,2))


// let x = 010 //8
// console.log(x)

// "use strict"
// let x = 010 // error
// console.log(x)

student = {
    name:"Nikhil",
    display:function(){
        console.log(this.name)
    }
}

student = {
    name:"Nikhil",
    display(){
        console.log(this.name)
    }
}

// student = {
//   name: "Nikhil",
//   display: () => {
//     console.log(this.name);
//   },
// };

student.display();
