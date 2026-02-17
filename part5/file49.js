function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P1 success");
    }, 4000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("P2 success")
      reject("error in p2 failed");
    }, 1000);
  });
}

function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P3 success");
    }, 1000);
  });
}

(async function main() {
  try {
    // const result = await Promise.all([p1(), p2(), p3()]);   // everycondition wiconst result = await Promise.any([p1(), p2(), p3()]); ll need the meet
    // const result = await Promise.any([p1(), p2(), p3()]);   //any one condition is correct comes out ansd which have lesser time will comes 
    // const result = await Promise.race([p1(), p2(), p3()]);   //shortest will be give wheter true or false (upar bhisme but sabse tez or success is the condtion which will be  won )
    const result = await Promise.allSettled([p1(), p2(), p3()]);  // give result of all thre wheter success of fail
    console.log(result);
  } catch (error) {
    console.log("error:   ", error);
  }
})();
