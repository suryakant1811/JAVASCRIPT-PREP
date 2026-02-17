function f1(args) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(args % 2 == 0) resolve()
      else reject("Odd Number not allowed")
    }, 2000);
  });
}

async function k() {
  try {
    await f1(5);
    console.log("Programm executed successfully")
  } catch (error) {
    console.log("Program rejected: ", error)
  }
}
k();
