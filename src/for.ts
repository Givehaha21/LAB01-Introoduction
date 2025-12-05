function cal(score_list:number[]){
    
    let sum_score = 0;
    for(let score of score_list){
        sum_score += score;  
}
return sum_score
}

let score_list = [90, 85, 78, 92, 88];
   console.log("Total score:", cal(score_list));