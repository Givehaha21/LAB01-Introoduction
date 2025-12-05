const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);


const b = [1, 2, 3, 4, 5];
const even = b.filter((num) => num % 2 === 0);
console.log(even);


const c = [6, 7, 9, 12, 20];
const odd = c.filter((num) => num % 3 === 0);
console.log(odd);

const d = odd.map((num)=> num * num * num);
console.log(d);