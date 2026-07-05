// //Example_1

// function Class_One(){
//     this.sub1="java";
//     this.sub2="html";
//     this.sub3="css";
// };
// let obj1=new Class_One();
// console.log(
//     obj1.sub1,
//     obj1.sub2,
//     obj1.sub3
// );

// //Example_2

// function class_1(){
//     this.wish="Java";
//     this.fun1= function(){
//         return `Welcome to ${this.wish}`;
//     }
// }
// let ob2=new class_1();
// console.log(ob2.fun1());

// //Example_3: -

// function class_1(){
//     this.wish="Java";
//     this.fun1= (()=>{
//         return `Hello ${this.wish}`;
//     })();
// }
// let ob2=new class_1();
// console.log(ob2.fun1);

// // Example_4: -
// function class1(){

// };
// class1.prototype.var_one="hello1";
// let obj1=new class1();
// console.log(obj1.var_one);

// //Example_5: -

// function class1(){

// };
// class1.prototype.var1="hello1";

// function class2(){

// };
// class2.prototype= Object.create(class1.prototype);
// let obj1=new class2();
// console.log(obj1.var1);


//Example_6: -

function class1(){

};
class1.prototype.fun1= function(){
    return "Hello";
}
function class2(){

};
class2.prototype=Object.create(class1.prototype);
class2.prototype.fun1= function(){
    return "Bye";
}
let ob1=new class2();
console.log(ob1.fun1());