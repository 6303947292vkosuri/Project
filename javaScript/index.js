//console.log("hello");           
/*let name="Divya";
var age=17;

if(age>18){
    let name="Divya A";
   // const name="KV:"
    console.log(name);
}

console.log(name);*/


//objects


// let employee={
//     name: "Varshitha",
//     designation: "Junior software developer",
//     salary: "3.6LPA",
//     mobile:9347011688
// }

//console.log(employee)


// let employees=["varshi","lucky","bannu"]
// console.log(employees)


//Alerts

  // alert("Registration is completed successfully")


//   let number1=prompt("Enter number1")
//   console.log(number1)


//confirm("Are you sure to exit")



//console statements


// console.log("Hello")
// console.info("information")
// console.warn("check the code")
// console.error("name is not defined")


//Spread operator


// let external_marks=[34,20,23,45,34,43]
// let internal_marks=[12,13,14,15,2,8]

// let results=[23,34,external_marks]
// let final=[ 34,23,...external_marks,...internal_marks]

// console.log(final)
// console.log(result)


//Rest parameter


// function addition(x,y,...remainData){
//     console.log(x);
//     console.log(y);
//     console.log(remainData)
//     console.log(typeof(remainData))
// }
//  console.log(addition(3,59,34,47,49,60,"Hello"))


//Destructing of array

//  let employees=["harry","lucky","bannu","supernatural"]
  
// // let name1=employees[0]

// let [harry_21,lucky,...data]=employees

// console.log(harry_21)
// console.log(data)


//Destructuring  of object


// let employee={ 
//      uname: "Varshitha",
//      designation: "Junior software developer",
//      salary: "3.6LPA",
//      mobile:9347011688
//  }

// let {uname,designation,...remainList}=employee;
// console.log(uname);
// console.log(designation);
// console.log(remainList)

// Functions

// let demo=function(x,y){
//   return x+y
// }

//  (function(){
//   console.log("welcome")
//  }) ()

//  setTimeout(function(){
//    console.log("Welcome")
//  },3000)

// console.log(demo(3,7))


//Arrow function

//   let demo= (x,y) =>{
//     return x*y
//   }
//  console.log(demo(3,7))


let employees=["Doraemon","Divya","Varshitha","lalithuuu","sravani"]

// for(let i=0;i<employees.length;i++){
// console.log(employees[i])
// }

//for-in

// for(let i in employees){
//   console.log(i)
// }

//for-of

//  for(let i of employees){
//    console.log(i)
// }

// employees.forEach(function(element,index){
//  console.log(element+"   ok")
// })



//map function

//  let result=employees.map((element,index)=>{
//      return element+" k"+index
//  })
//  //console.log(employees)
//  console.log(result)