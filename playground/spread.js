// function add (a, b){
//     return a + b;
// }
// var toAdd = [5,2,7,1,3]
// console.log(add(...toAdd));
// var GroupA = ['Oleg', 'Medved'];
// var GroupB = ['Roman'];
// var final = [...GroupB, 3, ...GroupA];
// console.log(final);
var person = ['Valera', 28];
var personTwo = ['Oleg', 38]; 
function printName (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

printName(...person);
printName(...personTwo);
console.log('........................................................................................................');
var names = ['Sergey', 'Volodya'];
var final = ['Timophey', ...names];
final.forEach(function (name){
console.log('Hi, ' + name);
});