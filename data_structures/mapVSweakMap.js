// {//block
//     let x={                 //x belongs to this block (Scope) we cant access it out
//                             //out of the scope bur now we are accessing it
//         arr :[2,3]          //Reason is map decleared here in the code as var
//     }                       //that's y we use weakMap();

//     var map=new Map();
//     map.set(x,"hello");

// }
// console.log(map);

{
    let x={
        arr:[2,3]
    }
    var map=new WeakMap();
    map.set(x,"hello");
}
console.log(map);