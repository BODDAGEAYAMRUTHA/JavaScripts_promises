// function functionName(a,a1,a2){
//     console.log(a,a1,a2);
// }
// functionName(1,"qs",5);


/*
// let a=[];
//     function f1(){
//         return "hello";
//     }
//     let n=require("readline-sync"); //readline-sync
//     let n1=n.question("enter value");

//     for(let i=0;i<Number(n1);i++){
//         a[i]=f1();
//     }
//     console.log(a);
*/

/*
let a=[];
    function f1(){
        return "hello";
    }
    let n=require("readline-sync"); //readline-sync
    let n1=n.question("enter value");

    for(let i=0;i<Number(n1);i++){
        a[i]=f1;
    }
    for(let i=0;i<Number(n1);i++){
        console.log(a[i]());
    }
*/

/*
// function f(){
//     console.log("hello");
// }

// setInterval(function(){f()},2000);
*/
/*
for(let i=0;i<5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
*/

function f1(...args){
    console.log(args);
}
f1("hello1","hello2");
f1("hello1","hello2","hello3");
f1();
f1(undefined);
f1(null);
f1(undefined,null);