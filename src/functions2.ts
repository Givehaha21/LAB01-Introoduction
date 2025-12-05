export const findmax = (findmax_list:number[]) =>{

    let max = 0;
    for(let list of findmax_list){
       if(list > max){
        max = list;
       }
    }
    return max;
}
