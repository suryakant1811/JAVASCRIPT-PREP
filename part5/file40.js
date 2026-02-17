function f1(){
   return new Promise((resolve, reject) => {
     setTimeout(()=>{console.log("this is f1 function")
         resolve()
     }, 2000)
   })
}

function f2(){
    console.log("this is f2 function")
}

async function k(){
    await f1()
    f2()
}
k()