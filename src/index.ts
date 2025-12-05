// import { add,subtract } from './functions.ts';

import add, { subtract } from './functions.ts';
import {findmax} from './functions2.ts';

const result = add(1,2) + 5;
const result2 = subtract(1,2) + 0;
console.log(result, 'type of result:', typeof result);
console.log(result2, 'type of result2:', typeof result2);

const findmax_list = [1,7,3,9,5,6,7,11,9,10];
console.log(findmax(findmax_list));




