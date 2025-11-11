// let greet= "hello world";
// console.log(greet);

// let myName=" Hein arkar kyaw";
// console.log(myName);

// let sayHi=`Hello there ${myName}`;
// console.log(sayHi)

// let time='3 o\'clock';
// console.log(time)

// let number=10
// console.log(number);

// let number2=20+number;
// console.log(number2)

// let myName=Boolean(`hein`)
//  console.log(myName)
//  let HH=false
//  console.log(HH)

// let hein=`hello`;
// console.log(hein);

// let arkar=`${hein} world`;
// console.log(arkar)

// let myNum=10
// let anotherNum=20
// console.log(myNum+anotherNum)

// let x;
// console.log(x)

// let y=null;
// console.log(y)

// let r=10;
// console.log(y+r)

// let arkar=1+4

// let a=4
// a%=4
// a+=5
// console.log(a)

// const num1 = 4;
// let num2 = 0;
//  if (num1==5) {
//     num2 +=7
//  } else {
//     num2 += 4
//  }

/*Airline Memmber
  notMember = full Price;
  normalMember = 5% discount;
  silverMember = 10% discount;
  goldMember = 15% discountl;
  platiumMember = 20% discount;
  */

//   const originalPrice = 100;
//   let totalPrice = 0;
//   let membertype = `platiumMember`;

//   if (membertype===`normalMember`) {
//     totalPrice += 100 * 0.95;``
//   } else if (membertype ===`silverMember`) {
//     totalPrice +=100 * 0.9;
//   } else if (membertype ===`goldMember`) {
//     totalPrice +=100 * 0.85;
//   } else if (membertype ===`platiumMember`) {
//     totalPrice +=100 * 0.8;
//   } else {
//     totalPrice = originalPrice;
//  }

////////////////////// Swith condition statement/////////////

//  const num1=2;
//  let num2=6;

//  switch (num1){
//   case 1: num2 +=3;
//   break;
//   case 2: num2 +=6;
//   break;
//   default: num2 +=5;
//  }

////////////////////////// Function////////////////////////

// function shopping(product) {
//   console.log (`Go to shop`);
//   console.log (`But a`+ product);
//   console.log (`Back to home`);
// }
// shopping(` pen`)

// function add (num1,num2) {
//   return num1 + num2;
// }
// let result= add (2,3);
// console.log (result+6);

// function countAge (name,born){
//   return name +(2025- born);
// }

// let result= countAge(`hein `,2000);
// console.log(result)

// function nowAge(yearOfBirth){
//     let currentYear=2023;
//     if(yearOfBirth>currentYear){
//         return "Your Current Age should be less than Current year";
//     }else{
//         return "Your Current Age is " + (currentYear-yearOfBirth);
//     }
// }
// let result=nowAge(2000);
// console.log(result);

// // Default Parameter//

// function add (a,b=0){
//   return a + b

//  }
//  console.log(add(2))

//////////////////////Rest Paremeter////////////////////////

// function test(a,b,...c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
//  }
//  test(1,2,3,4,5,6,7)

//Function Statement//

// function myname(){
//   console.log(`hein`)
//  }
// myname()

//Function expression//

// let myName= function(){
//   console.log(`arkar`)
// }
// myName()

// Callback Function//

// function myName(name,fun){
//   let result= fun(name);
//   console.log(result)
// }
// myName('hein arkar' , function (name){return(name)})

// function twice(num,modifier){
//   let result= modifier(num) * 3;
//   console.log(result);
// }
// twice(4, function(num){return num + 5})  //4+5*3

//////////////////// Arrow Function///////////////////////////////

// let twice=(num,modifier)=>modifier(num)*4;
// console.log(twice(5, function (num){return num + 7}))

// let myname= function(word){
//   return word
// }
// console.log(myname('arkar'))

// let myName=word=>word
// console.log(myName('HEIN'))

////Return

// let num1=0;
// function myNum(firstNumber, secondNumber, thirdNumber) {
//   num1= firstNumber * secondNumber * thirdNumber;
//   num1 += 3;
//   num1 /= 2;
//   return num1;
// }
// console.log (myNum(2, 4, 6))

/////////////////////////Object/////////////////////////

///////////Array//////

// let mixture = new Array(1, 2.2, `hello`,true);   //old style//
// let mixture=[1, 2.2, `hello`, false]
// console.log(mixture)

// let fruit = [`apple`, `mago`]
//  fruit[2]=`banana`;
//  console.log(fruit[fruit.length-1])

//////////////////Nested arry/////////////////////

// let arr=[
//   ['a','v','w'],
//   [1, 2, 3 ]
// ]
// console.log(arr[0][2])

// let arr=[
//   ['a', 'b', 'v'],
//   [1,2,34,54]
// ];
// arr[0][2]='c'
// console.log(arr)

/////////////////////Spread oprator(...)//////////////

// let num1 = [1, 2, 3, 4];
// let num2 = [5, 6, 7, 8];

// console.log(...num1,...num2)

// function add(a,b){
//   console.log(a+b)
// }
// let nums=[1,2]
// add(...nums)

//////////Destructuring(ဖြိူခွဲပေး)//////////////////

// let datas = [`mgmg`, 20, "naychi"];
// let [name, age, school] = datas;
// console.log(name, age, school);

// function add ([a,b]){
//   console.log(a+b)
// }
// add([1,2])

////////////////Array Map mathod////////////////

// let num=[1,2,3,4,5]
// let newarr=num.map((num)=>{
//   return num + 100
// })
// console.log(newarr)

// let Datas=[`Pyae gyi`, `Kaung gyi`, `Kyaw gyi`]

// Datas=Datas.map(name=>`Mg `+name)
// console.log(Datas)

///////////////Array Filter mathod///////////////

// let nums=[2,3,4,5,6,7,8,9,10]
// nums=nums.filter(num=>num!=3)
// console.log(nums)

/// Array Reduce mathod//////

// let nums=[1,2,3,4,5,6,7]

// let result=nums.reduce((pre,current) => pre+current

// )
// console.log(result)

/////////////////Object//////////////////////////

// let person={
//   name:"Clay",
//   age: 20,
//   school:`Uni`,
//   eat(){ console.log(`person is eating`)}
// }

/////////////////Dot notaion////////////////
// console.log(person.name)

/////////////////Bracket notaion////////////

// let persondata= `name`
// console.log(person[persondata])

// let person={
//   age:19,
//   hobby:`playFootball`,

// }
// let input1=`aung aung`;
// let input2=1000;
// let personName= `Donated by `+ input1;
// person[personName]= input2;
// console.log(person)

//////////////////////This////////////////////////

///////method => method's object//////////

// let person={
//   name:`jone`,
//  eat(){console.log(this.name+ ` is eating`)}

// }
// person.eat()

////// regular Function => window///////
//  function test(){
//   console.log(this)
//  }
//  test()

/// Arrow function => parent's this(lexical scopoing)

// let person={
//   name:`Hein`,
//  eat(){
//   console.log(this)

//   setTimeout(()=>{
//     console.log(this)
//   }, 3000)
//  }

//  }
// person.eat()

//////////////////////// Object Spread///////////////////////

// let obj1={
//   myName: `Hein ar kar kyaw`,
//   myAge:25
// }
// let obj2={
//   myHairColor:`Black`}

// let obj3={...obj1,...obj2}
// console.log(obj3)

////////////////////////Object Distructuring//////////////////////

// let {name,age}={
//   name:`hein`,
//   age: 26
// }

// console.log(name,age)

///////Property Shorthand////////////
//  let name=`hein arkar kyaw`
//  let age=25

//  let person={
//          name,                ////// name:name,//////////
//            age               //////  age:age/////////////
//  }
//  console.log(person)

/////////////////////Javascript Data sturcture////////////(dataတွေကိုသိမ်းဆည်းနည်း,// dataများကြီကို//)

// let people=[
//   {name:`Hein arkar`,age:25,gender:`male`},
//   {name:`kyaw gyi`,age:19,gender:`male`},
//   {name:`khin lay`,age:20,gender:`fmale`},
// ]
//////Map mathod//////////
// let peoplename=people.map(person=>person.name,)

// console.log(peoplename)

/////////////////////Filter mathod//////////////////////////////

// let serchKeyword=prompt(`serch person`)
// let Personage=people.filter(person=>person.name.includes(serchKeyword))

// console.log(Personage)

/////////////////Json ''///////////////(String,number,Boolean,Array,object,Null)

//////////Parse///////////////

// let person='{"name":"Hein arkar kyaw","age":20}'
// let obj=JSON.parse(person);
// console.log(obj)

//////////////Stringify////////////

// let person={name:`arkar`,age:26}

// console.log(JSON.stringify(person))

///////////////////////////If else/////////////////////////

// let tired= prompt(`Are you tired? "Yes or No`)

// if (tired===`Yes`)
//   console.log(`Rest Well`);
// else if(tired===`No`)
//   console.log(`Go Back Home`);
// else console.log(`Plase enter Yes or No`)

// let Product_Price=[100,330,450,100,456,100,452,100]

// Product_Price=Product_Price.map( price=>{  if (price===100) price-=30
//   return price
// }
// )
// console.log(Product_Price)

// let people=[
//   {name:`Joney`, age: 22},
//   {name:`helen`, age:24, gender:`f`},
//   {name:`Clay`, age:24, gender:`m`}
// ]

// people=people.map(person=>{
//   if (person.gender){
//     if(person.gender===`f`)
//       person.gender=`female`
//     if(person.gender===`m`)
//       person.gender=`male`
//   }
//    else person.gender=`unknow`
// return person
// })

//   peopel=people.map( person=>{
//     if (person.gender===`m`)
//       person.gender=`male`
//     else if (person.gender===`f`)
//       person.gender=`female`
//     else
//      person.gender=`Unknow`
//   return person
//   })
// console.log(people)

////////////////////////If else exoression(ternary opreator)///////////

// let age=20
// let permissoin=age>18?`authorized`: `Unauthorized`;

// console.log(permissoin)

//////////////////////////////Switch statement//////////////////////

// let people=[
//     {name:`hein`,age:25,gender:`m`},
//     {name:`arkar`,age:24},
//     {name:`may`,age:25,gender:`f`},
//     {name:`Kyaw Gyi`,age:25,gender:`m`}
//   ]

//   people=people.map(person=> {switch(person.gender){
//     case `m`:
//       person.gender=`male`;
//     break;
//     case `f`:
//       person.gender=`female`;
//     break;
//     default:
//       person.gender=`Unknow`;
// }
//   return person
//   })

//  console.log(people)

////////////////////////// While Loop///////////////////////

// let people=[`hen`, `arkar`,`kyaw`,`helen`,`kaung`,`mg mag`]
// let x=0
// while(x<people.length){
//   console.log(people[x])
// x++
// }

//////////////Do While Loop////(Condition ကိုနောက်မှစစ်ချင်ရင်// do ထည်းက လုပ်ဆောင်ချက်ကို တစ်ခါတော့လုပ်ပေးတယ် condition false ဖြစ်ရင်)/////////////////
// let x=0
// do{
//   console.log(`hein`)

// } while(false)

//////////////////////////For loop///////////////////////////

// let people=[`hen`, `arkar`,`kyaw`,`helen`,`kaung`,`mg mag`]
// for( let x=0; x<people.length; x++){
//   console.log(people[x])
// }

///////////For of loop(Array)////////////

// let people=[`hen`, `arkar`,`kyaw`,`helen`,`kaung`,`mg mag`]

// for (person of people){
//   console.log(person)
// }

// let sendEmail= email=>{
//   console.log(`Senting email to ` + email)
//  }
//  let sendDiscountEmail= email=>{
//   console.log(`Senting Discount email to `+ email)
//  }

// let customers=[
//   { name: `customer1`, number: 12345678, email: `customer1@gmail.com`, dateOfBirth: `12.4.20`},
//   { name: `customer2`, number: 34567812, email: `customer2@gmail.com`, dateOfBirth: `22.5.20`},
//   { name: `customer3`, number: 45678123, email: `customer3@gmail.com`, dateOfBirth: `24.7.20`},
//   { name: `customer4`, number: 56781234, email: `customer4@gmail.com`, dateOfBirth: `1.1.20`},
//   { name: `customer5`, number: 67812345, email: `customer5@gmail.com`, dateOfBirth: `12.12.20`},
// ]
//  for (let x=0; x<(customers.length);x++){
//   let customersEmail=customers[x].email;
//   let customersBirth= customers[x].dateOfBirth;
//   if (customersBirth===`24.7.20`){sendDiscountEmail(customersEmail);}
//   else if (customersBirth===`12.4.20`){sendDiscountEmail(customersEmail);}
//   else{sendEmail(customersEmail)};
// }

////////////////// For in loop(Object)////////////

// let person={
//   name:`hein`,
//   age: 20
// }
// for (key in person){
//   console.log(`${key} is ${person[key]}` )
// }

// let people=[`hen`, `arkar`,`kyaw`,`helen`,`kaung`,`mg mag`]

// for (person in people){
//   console.log(people[person])
// }

//////////// Scroping//////////////////

// let x=0 ///////////////Groble scrope/////////////
// console.log(x)

//    {
//     let y=8 //////////////local scrop//////////////
//     console.log(y)
//    }

////////////////////////OOP//////////////////////////////

// class Car {
//   Wheel= 4;
//   Colour= `Red`;
//   Drive (){
//     console.log(`Car is driving`)

//   }

// }

// let car= new Car
// console.log(car)

// let cartwo= new Car
// cartwo.Colour=`White`
// cartwo.engin=`2.0`
// console.log(cartwo)

///////////////////////////////OOP Example and static Property////////////////////////////

// class Calculator{
//   plus(n1,n2){
//     return n1 + n2
//   };
//  static minus(n1,n2){
//     return n1 - n2
//   };
//  static division(n1,n2){
//     return n1 / n2
//   };
//   remider(n1,n2){
//     return n1 % n2
//   };
// }

// let Match=new Calculator
// console.log(Match.plus(2,4))

// console.log(Calculator.minus(5,2))

/////////////////////static-method-and-this-keyword/////////////////

// class Calculator {
//   PI=3.14;
//   area(r){
//     return this.PI*r**2;  ////PI R square//////
//     }
//   volume(r,h){
//     return this.area(r)*h
//   }
// }
// let calculator= new Calculator;
// console.log(calculator.volume(2,3))

////////////////////////static-method-main-concept//////////////////////////////

// class Calculator {
//   PI=3.14;
//   name=`casio`
//   area(r){
//     return this.PI*r**2;  ////PI R square//////
//     }
//   volume(r,h){
//     return this.area(r)*h
//   }
//   static info (){
//     let calculator=new Calculator
//   console.log(`I am `+ calculator.name+` calculator`)
//   }}
// Calculator.info()
/////////////static mathod မှာ this keyword ကိုသုံးမရ/////////static က class ကိုပဲအခြေခံပြီးrunတာမို့(this ကလက်ရှိrunနေတဲ့ current function ရဲ့ obj ကိုပဲ point လှမ်းထောက်လို့)

////////////////////////OOP (constructure)/////////////////////////////

//  class Car{
//   constructor(){
//     console.log(`I am first runner in Obj and for data share`)
// }} new Car()

// class Car{
//   Name=``
//   wheels=``
//   constructor(name,wheels){
//     this.Name=name
//     this.wheels=wheels
//     this.drive()
//   }
//      drive (){
//     console.log(this.Name+ ` is driving`)
//    }
//    getWheel(){
//     console.log(this.Name+ ` has `+ this.wheels + ` wheels`)
//   }
//   }
// new Car(`marcedes`)
// new Car(`Ford`)
// let toyotacar=new Car(`Toyota`,10)
// toyotacar.getWheel()

//////////////////////////////OOp (acess modifier---//static//public//private(#))//////////////

// class car{
//   Name=`Toyota`;
//   #hp=300
//   getHorsePower(){
//     console.log(`This car horsepower is `+ this.#hp)
//   }
// }

// let Car=new car
// Car.getHorsePower()

//////////////OOP (Inheritance(မိဘစီကနေ အမွေဆက်ခံတာ))/////////Extends///////////////

// class animals{
//   constructor(name){
//     this.Name=name
//   }
//   run(){
//     console.log(`${this.Name} is running`)

//   }
// }

// class Dog extends animals{
//   bark(){
//     console.log(this.Name+ ` bark woof woof`)
//   }
// }
// let dog=new Dog(`Aung nak`)
// dog.bark()
// dog.run()

/////////////////////Promise(asynchronous way)////////////////////////////////

// function synchronous(){
//   let result=0
//   for(let i=0;i<10000000;i++){
//     result+=i
//   }
//   return result

// }
// console.log(`first work`)
// console.log(synchronous())
// console.log(`more important works`)

// function asynchronous(){
//  return new Promise((resolve,reject)=>{
//     let result=0
//     for(let i=0;i<10000000;i++){
//       result+=i
//     }
//   if(result){
//     resolve(result)
//   }
//   else {reject('Sorry! I have some error')}
// })
// }

// console.log(`first work`)
// asynchronous()
// .then((resolveResult)=>{
//   console.log(resolveResult)
//   console.log(`you can write some code after asyn task`)
// })
// .catch((sorry)=>{
//   console.log(sorry)

// })
// console.log(`more important works`)

//////////////////////////Fetch API//////////////////////////////////////////

// let userInput=prompt(`Tell Me User ID`)
// fetch('https://jsonplaceholder.typicode.com/todos/'+userInput)
// .then((response)=>{
//   return response.json()
// })
// .then((data)=>{
//   console.log(data)
// })
// .catch((err)=>{
//   console.log(err)
// })

/////////////////Async awiat//////////////////

// async function fectchtool() {
//   try {
//     let response = await fetch(`https:jsonplaceholder.typicode.com/todos`);
//     console.log(`hello`);
//     let datas = await response.json();
//     console.log(datas);
//   } catch (err) {
//     console.log(err);
//   }
// }
// fectchtool();

////////////////////// Coding style/////////////////////////////

//// all cap (for const)////////
// HELLO_wORLD //
// const NUMBER_ONE=1

///// sanke case(for normal variable)//////
//hello_world//
// let number_one=1

///// camel case(for obj and mathods)////
// helloWorld//
// let obj={
//   propertyName:`Name`,
//   mathodName(){} }

//// Capital case(for calss)
//HelloWorld///
// class MyCar{}

//////////////////////////////node-module-export//////////////

// const { add, minus, PI } = require("./math");
// console.log(add(2, 5));

///////////////////////////////////Es Module/////////////////
//  import { add, minus, PI } from ("./math.mjs")
