interface Person {
   name: string;
   age: number;
}
let a: Person = {
   name: 'Alice',
   age: 30
}
// console.log(`Name: ${a.name}, Age: ${a.age}`);
a = {
   name: 'Bob',
   age: 25
}
console.log(a);

