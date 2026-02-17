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

function getAttendenceInfo(){
    return new Promise( (resolve, reject)=> {
        setTimeout( () => {},2000)
        resolve("Present")
    }   
 )
}

function getExamInfo(){
    return new Promise( (resolve, reject)=> {
        setTimeout( () => {},2000)
        resolve("Pass")
    }   
 )
}

function displayInfo({name}){
  console.log(name)
}

async function main() {
  try {
    // const result = await getStudentInfo()
    // const attendence = await getAttendenceInfo()
    // const exam = await getExamInfo()
    const result = await Promise.all([
        getStudentInfo(),
        getAttendenceInfo(),
        getExamInfo()
    ])
    // displayInfo(result)
    console.log(result)
  } catch (error) {
    console.log("Error", error)
  }
}
main()