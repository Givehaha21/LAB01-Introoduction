// const add = (a:number,b:number):string => {
//    const result =  a+b;
//    return result.toString();
// }

// console.log(add(2,3),typeof add(2,3));



const findmax = (findmax_list:number[]) =>{

    let max = 0;
    for(let list of findmax_list){
       if(list > max){
        max = list;
       }
    }
    return max;
}

const findmax_list = [1,7,3,9,5,6,7,11,9,10];
console.log(findmax(findmax_list));

