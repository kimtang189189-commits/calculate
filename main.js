//var name=prompt("Enter name")
//var code =prompt("Enter code");
//var qty=prompt("Enter qty")
//var price =prompt("Enter price")
//var total=qty*price;

//document.write("Code="+code+"</br>")
//document.write("qty = "+qty+"</br>")
//document.write("Price="+price+"</br>")
//document.write("name = "+name+"</br>")
//document.write("Total"+total+"</br>")

//if(total>1 && total>=10){
  //  var discount = total*0.1;
  //  document.write("discount="+discount+"</br>")
  //  var paymen=total - discount
  //  document.write("paymen ="+paymen+"</br>")
//}else if(total>10 && total>=20){
    //var discount = total*0.2;
    //document.write("discount="+discount+"</br>")
    //var paymen=total - discount
    //document.write("paymen ="+paymen+"</br>")   
//}else if(total>20 && total>=30){
   // var discount=total *0.3;
   // document.write("discount="+discount+"</br>")
   // var paymen=total - discount
    //document.write("paymen ="+paymen+"</br>")
//}else if (total>30 && total>=40){
  //  var discount =total*0.4;
  //  document.write("discount="+discount+"</br>")
  //  var paymen=total - discount
  //  document.write("paymen ="+paymen+"</br>")
//}else if (total>40 && total>=50){
  //  var discout = total*0.5;
  //  document.write("discount="+discount+"</br>")
   // var paymen=total - discount
  //  document.write("paymen ="+paymen+"</br>")
//}else if(total>50&& total>=60){
  //  var discount= total*0.6;
  //  document.write("discount="+discount+"</br>")
  //  var paymen=total - discount
  //  document.write("paymen ="+paymen+"</br>")
//}else{
   // var discount=total*0.7;
   // document.write("discount="+discount+"</br>")
   // var paymen=total - discount
   // document.write("paymen ="+paymen+"</br>")
//}


//---loop----
//for loop, while loop, 
//------for loop-------
//synatax: for(start , stop ,step){}

//for (let i=0 ;i>10 ,i++){
 // console.log("Numder"+i)
//}

//----------while loop-----
//syntax
// let i=0//start
// while(i<10){//stop
//   console.log("Hello"+i)
//   i++//step
// }

//========do while loop

// let i=0;//start
// do{
//   console.log("Helloooooo"+i)
//   i++//step
// }while(i<10)//stop

// ======== function
// user defined Function:2
  // return function : 
      //return has paramater
      //return none paramater
  // none return fuction nction 
    //none return has parameter
    //none return none paramater
// Built-in Function

//function :call back , arrow , es6

//return non paramater
// function userName(){
//     let x =10;
//     let y= parseInt("10");
//     return x+y;
// }

// console.log(userName());
// //return has parameter
// function calculate(x,y){
//   return x + y;
// }
// console.log(calculate(23,5))

// no return function no parameter
// function result(){
//   console.log("Hellooo");
// }
// result()

// //no return function has parameter
// function res(name){
//   console.log(name);
// }
// res("chanda")
// // call back function
// function call(name, callback){
//   console.log("Hello"+name);
//   callback()
// }
// function show(){
//   console.log('Hi dara');

// }
// call("hong",show())

// //arrow or es6 function
// function add(a,b){
//   return a+b
// }

let sum = (a,b)=>{
  a+b
}
console.log("sum ="+add(10,23))