let arr=[];
for(let i=0;i<5;i++){
    arr.push(()=>{
        return "hello";
    });
}
for(let i=0;i<5;i++){
    console.log(arr[i]());
}