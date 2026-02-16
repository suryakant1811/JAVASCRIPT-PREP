// function response(user){
//     console.log(user)
// }

function response({name, email, role}){
    console.log(name, "  ", email, "    ", role)
}


const user = {
    name: "John",
    email: "john@gmail.com",
    role: "user"
}

response(user)