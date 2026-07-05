let promish1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("we will have class tomorrow")
    },0);
});

let promish2=new Promise((resolve,reject)=>{
    resolve("hello1")
});

promish1.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes)
});
promish2.then((posRes)=>{
    console.log(posRes)
},(errRes)=>{
    console.log(errRes)
});
