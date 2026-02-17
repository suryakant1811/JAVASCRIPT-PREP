//clouser

// function outer(){
//     let n = 1
//     function inner(){
//         return n++
//     }
//     return inner
// }

// const counter = outer()
// console.log(counter())
// console.log(counter())

function user(){
    let password = "1234"
    function checkPassword(inputPassword){
        return password === inputPassword
    }
    return checkPassword
}

const value = user()
console.log(value("1234"))