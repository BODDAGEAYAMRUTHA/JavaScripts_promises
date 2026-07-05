//Example1
(()=>{
    console.log("welcome to IIFE");
})();

//Example2
let arr=[];
for(let i=0;i<5;i++){
    arr.push((()=>{
        return "hello";
    })());
}
for(let i=0;i<5;i++){
    console.log(arr[i]);
}

//Example3
function fun(ar1,ar2,ar3){
    console.log(ar1,ar2,ar3);
}
fun((()=>{ return "hello1"})(),(()=>{return "hello2"})(),(()=>{ return "hrllo3"})());

//Example_4

((arg1,arg2,arg3)=>{
    console.log(arg1,arg2,arg3);
})("hello","hello1","hello2");

//Example_5: -

for(var i=0;i<5;i++){
    setTimeout(()=>{
        console.log(i);
    },5000);
}

//Example_6: -

for(var i=0;i<5;i++){
    ((i)=>{
        setTimeout(()=>{
            console.log(i);
        },5000);
    })(i);
}

