let p1=new Promise((resolve,reject) => {
if(true){
    reject("i am rejecy");}
})
p1.then(
    (res)=>console.log(res),
    (rej)=>console.log(rej)
);
console.log("tanya");
console.log("laksmi");
setTimeout(()=>{
console.log("hii");
},1000);




let p2 = new Promise((resolve) => {
    if (true) {
        resolve("promise1");
    }
});

let p3 = new Promise((resolve) => {
    if (true) {
        resolve("promise2");
    }
});

Promise.all([p2, p3]).then((res) => console.log(res));


let p4 = new Promise((resolve) => {
    if (true) {
        resolve("promise1");
    }
});

let p5 = new Promise((_,reject) => {
    if (true) {
       reject("promise2");
    }
});
Promise.all([p4, p5])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));


    let p6 = new Promise((_,reject) => {
        if (true) {
            reject("promise1");
        }
    });
    
    let p7 = new Promise((_,reject) => {
        if (true) {
           reject("promise2");
        }
    });
    Promise.all([p6, p7])
        .then((res) => console.log(res))
        .catch((err) => console.log(err));



        let p8 = new Promise((resolve,reject) => {
            let x=10;
            if (x==5) {
                resolve("promise1");
            }else{
                reject("reject promise1");
            }
        });
        
        let p9 = new Promise((_,reject) => {
            if (true) {
               reject("promise2");
            }
        });
        Promise.all([p8, p9])
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    


  let p10 = Promise.resolve("complete promose");     
  let p11 = Promise.resolve("complete promose");     
   Promise.all([p10,p11])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));  
  
  let p12 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Promise12");
      }, 100);
    }
  });
  
  let p13 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Promise13");
      }, 100);
    }
  });
  
  let p14 = new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("Promise14");
      }, 100);
    }
  });
  
  Promise.race([p12, p13, p14])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
   