// function f1(args) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(args % 2 == 0) resolve(`${args} is a even number`)
//       else reject("Odd Number not allowed")
//     }, 2000);
//   });
// }

// async function k() {
//   let num = Math.round(Math.random()*10)
//   try {
//     const result = await f1(num);
//     console.log(result)
//     console.log("Programm executed successfully")
//   } catch (error) {
//     console.log("Program rejected: ", error)
//   }
// }
// k();

function getStudentInfo(){
  return new Promise ((resolve, reject)=>
    setTimeout(() => {
    const info = {
    name: "surya",
    email: "surya@gmil.com",
    age: 21
    }
    resolve(info)
  }, 2000)
)
}

function

function displayInfo({name}){
  console.log(name)
}

async function main() {
  try {
    const result = await getStudentInfo()
    displayInfo(result)
  } catch (error) {
    console.log("Error", error)
  }
}
main()