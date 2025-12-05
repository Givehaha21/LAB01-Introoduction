// const object = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// console.log(object.name);
// const jsonStr = JSON.stringify(object);
// console.log("Object: ", object);
// console.log("json String: ", jsonStr);


const student = {
    first_name: "John",
    lastname: "Doe",
    age: 21,
    gpa: 1.4,
}

function checkgap(student:{first_name:string,lastname:string,age:number,gpa:number}){
    if(student.gpa > 2.0){
      const jsonStr = JSON.stringify(student);
      return jsonStr;
    } else{
        return `คุณ ${student.first_name} ${student.lastname} พ้นสภาพ`;
    }   
}

console.log(checkgap(student));





