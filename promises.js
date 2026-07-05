// let promis1=new Promise((resolv,rejec)=>{
//     resolv("tomorrow we have class");
// })

// promis1.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// });

// //Example_2: -

// let promish1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow")
//     },5000);
// });

// promish1.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// });


// //Example_3: -

// let promish1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow")
//     },5000);
// });

// let promish2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow 11")
//     },6000);
// });

// let promish3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow 22")
//     },8000);
// });

// Promise.all([promish1,promish2,promish3]).then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// });


// //Example_4: -

// let promish1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow")
//     },5000);
// });

// let promish2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow 11")
//     },6000);
// });

// let promish3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow 22")
//     },8000);
// });

// Promise.race([promish1,promish2,promish3]).then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// });


// //Example_5: -

// let promish1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow")
//     },5000);
// });

// let promish2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("we will have class tomorrow 11")
//     },6000);
// });

// let promish3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("we will have class tomorrow 22")
//     },8000);
// });

// Promise.all([promish1,promish2,promish3]).then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// });


//Example_6: -


let promish1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("we will have class tomorrow")
    },5000);
});

let promish2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("ERROR")
    },6000);
});

let promish3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("we will have class tomorrow 22")
    },8000);
});

Promise.allSettled([promish1,promish2,promish3]).then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes)
});
