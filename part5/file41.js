function f1(args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(args % 2 == 0) resolve(`${args} is a even number`)
      else reject("Odd Number not allowed")
    }, 2000);
  });
}

async function k() {
  let num = Math.round(Math.random()*10)
  try {
    const result = await f1(num);
    console.log(result)
    console.log("Programm executed successfully")
  } catch (error) {
    console.log("Program rejected: ", error)
  }
}
k();
